# Working with Bounded Contexts in Hub

## Intro
We utilize a combination of Domain Driven Design, Bounded Contexts, Command Query Separation, Verticle Slices Architecture, Functional styled Procedural Programming, Ports and Adapters, The Repository Pattern, and Onion (aka Clean aka Hexagonal) Architecture within backend code here at Prenda. As of this writing these patterns are only really used for new code within the Hub application. For the puroses of this document we'll reference these and other core patterns, paradigms, tools, or principles as "useful abstractions (UA)". 

The purpose of utilizing these UAs is to help achieve a set of defined goals that are outlined further in this document.

Not all UAs are implemented dogmatically, and doing so would lead to many instances of conflict between the UAs. Rather choice core principles from the UAs have been chosen and applied in such a way that these principles are orthogonal to each other and support well the defined goals.

This document will not attempt to answer all critiques of these UAs nor will it discuss the in depth the tradeoffs of why these UAs are the right tools.

## Goals
- Code for a given capability is easy to find.
- Changes to a given behavior are less risky.
- The effects of a change to a domain model shape are clear and should cascade and only to those dependents that actually utilize the changes.
- The API of code implementing a behavior is clear. *You should know exactly what data is required to successfully initiate a behavior as well as understanding exactly how 
- Failures due to essential complexity should be uniquely and easily identifiable and bad data states caused by such errors should be easily remediated.
- Code should be covered by automated tests. *Testing strategy and acceptable coverage (shoot for as much as possible) are not currently specified).

## Non Goals
- Don't Repeat Yourself (DRY) and Brevity at the expensive of clarity. *DRYness and Brevity are often associated with readability and understandability, but these should be seen as side effects of Clarity. If ever in doubt about a decision between dry/brevity and clarity, err on the side of clarity. Flexibility is also valuable given Prenda's current state. There are many instances in which sacrificing DRYness and Brevity for flexibility is the correct choice.*

## Guidelines
- Other than the consumption of a command or query, code sharing between bounded contexts should be avoided by default. There may be cases where a bounded context is implemented in a different project. In this case no dependency should be had on the code of that project and integration must be done asynchronously (http call, event handler, etc).  *This is a concept borrowed from Domain Driven Design - specifically Bounded Contexts.*

- The only dependencies between Vertical Slices (different command and queries) should be usages of the command or query function from another slice. Using shared code that sits outside the slice is fine. There are occasional exceptions to this rule (link to exception). *Vertical Slices revolve around the axis of change being a slice. We want to couple along the axis of change.*

- Base types representing the shape of domain models should be in the domain directory at the bounded context root. These types can be shared, often for the purpose of derivatives, among slices.

- Domain types, regardless of whether scoped to a slice or scoped to a bounded context, should not depend on code that is not itself either domain code or is a generic utility type (error handling, ts utils, and such). *This is a concept borrowed from Clean/Hexagonal/Onion architecture and key piece in the internal consistency of our domain model if followed. Exceptions to this rule should be very slim or non existent.*

- Repository layer code is the only code that should depend on types representing the shape of database table/view/query/etc. *The implementation details of data persistence should not be exposed to consumers of a domain model that utilizes said persistence. One of the quickest ways to a building a ball of mud is to do let a database schema (slow and risky to change) be the source of truth for the shape of a domain model across all layers and systems. There are cases where this is ok (constrained problem space, prototypes, etc), but this should be avoided by default. More reading (LINK)*

- Don't require more data for a function than is required. *A slim API is less risky to change and easier maintain and reason about.*

- All data should only have a single source of truth. *It is ok for data to be stored in multiple places as long as the source of truth is always one location. For concepts that exist within multiple domains (students), it is perfectly acceptable for that concept to have it's source of truth spread across data stores as long as no part (field) of any individual meaning is has it's source of truth in more than one location.*

- The known errors of a command/query within a Vertical Slice should be included in it's type signature. *It is recommended to coerce exceptions to values for known errors whenever possible, but at minimum no known errors should be exposed from a command/query function by way of thrown exception.*

- If an error represents a possible bad data state there should be documentation regarding this bad data state and how to remediate it. *At minimum there should be a comment attached to the type definition for a given error that provides appropriate context.*

- When a bug is fixed an existing test should be updated to "prove" the fix or a new test should be written to accompany the fix.

- Validation should be performed on all handler request data.

## Remediation of code not meeting guidelines
There are cases of existing code not meeting these existing guidelines. Refactoring existing code to meet these guidelines should be seen as tech debt and prioritized accordingly. Effort should be taken to have all new code should meet these guidelines. Any code that must break a guideline should be called out, addressed, and either documented for cases which make sense to break a guideline, or have an associated tech debt ticket created in cases where breaking a guideline is required to quickly remediate a critical issue that following a guideline would delay.

## Wiggle Room
This document doesn't aim to define code styling (commads, linting rules, args as object vs not) nor does it aim to define the implementation of given abstractions as long as they don't deviate from the guidelines. *For example you could have one Vertical Slice utilizing a driver to execute queries directly against a database through a connection while another Vertical Slice utilizes an ORM. As long as both slices don't expose database concerns to the consumer of a given slice then both strategies are acceptable. Another example would be tests. Maybe one slice tests itself by unit tests via isolated dependency and mocks + integration tests for side effecst while another test uses just uses api level integration (acceptance) testing. Both are acceptable as long as there is coverage.*

## The Future
- If and as we collect more data/it grows in complexity - we likely will need to apply the same decoupling of domains by way of bounded contexts to our databases. *We should condsider breaking up the database. Technical requirements and prudence should drive the implementation of breakup (schemas vs instances, etc). Each new distinct piece should relate to a given bouned context and should house ONLY the data required to support the Vertical Slices of those BCs.*

## Additional Principles
These principles, while value adding, do not directly support the goals nor did they fall into non-goal. As such guidelines were not built around these principles. These 

- Validate at all IO boundaries (guideline above indicates just handler request data). *Typescript can be a powerful tool, but it is only useful at compile time (as you write and build code). Validating that data being ingested by a process written using Typescript can go a long way in ensuring that the type safety provided by Typescript is reliable.*

- Endeavour to make invalid states impossible. *Example1: If performing operations that utilize an email address which must be validated, consider creating a branded type `type ValidatedEmail = { _tag: "ValidatedEmail"; value: string }` rather than utilizing a `string`. Example2: Rather than `type School = { name: string; familyData?: FamilyData; partnerData?: PartnerData }` do `type School = FamilySchool | PartnerSchool; type FamilySchool = { _tag: "FamilySchool"; name: string; familyData: FamilyData }; type PartnerSchool = { _tag: "PartnerSchool"; name: string; partnerData: PartnerData }`*

## How this doc changes
TODO