# Working with Bounded Contexts in Hub

## Intro
We utilize a combination of Domain Driven Design, Bounded Contexts, Command Query Separation, Verticle Slices Architecture, Functional styled Procedural Programming, Ports and Adapters, and Onion Architecture within backend code here at Prenda. As of this writing these patterns are only really used for new code within the Hub application. For the puroses of this document we'll reference these and other core patterns, paradigms, tools, or principles as "useful abstractions (UA)". The goal of this document will be to explain what parts of these useful abstractions we use, why, and how. It will also include some thoughts on the future UAs and what the conditions might be to utilize some of them or pivot away from current ones.

You may also see the Repository Pattern, TODO, and TODO. These are not as heavily used UAs and they are not to be considered non-core UAs (as opposed to the initial UAs which could be considered core UAs). 

This document will not attempt to answer all critiques of these UAs nor will it discuss the in depth the tradeoffs of why these UAs are the right tools. That is not the purpose of this document and should be documented elsewhere.

## What
We sparingly utilize strategies and patterns from Domain Driven Design (DDD). Primarily we utilize the Bounded Contexts (BC) concept. We currently implement Bounded Contexts within this monolithic application of Hub, though you may find some familiarity to BCs within the inherent logical boundaries that are present with other services (Enrollments Portal) due to the inherent constraints of multiple services.

The code within a Bounded Context cannot depend upon the code within another bounded context, EXCEPT for specified ports. The implementation of these ports are queries and commands. If there is a mismatch in similar shapes then a consumer is responsible for writing an adapter to the the current shape of the port. Only if an adapter is not possible due to unideal behavior, mismatch in shapes, mismatches in meaning, etc. shall the port be altered to allow consumption. Alterations that add new fields shall not need to be versioned. Other alterations which remove fields, change meaning, or change behavior, shall require versioning.

## Why

## How

## Goals
- Code for a given capability is easy to find.
- Changes to a given behavior are less risky.
- The effects of a change to a domain model shape are clear and should cascade and only to those dependents that actually utilize the changes.
- The API of code implementing a behavior is clear. *You should know exactly what data is required to successfully initiate a behavior as well as understanding exactly how 
- Failures due to essential complexity should be uniquely and easily identifiable and bad data states caused by such errors should be easily remediated.
- Code should be covered by automated tests. *Testing strategy and acceptable coverage (shoot for as much as possible) are not currently specified).

## Non Goals
- Don't Repeat Yourself (DRY) and Brevity at the expensive of clarity. *DRYness and Brevity are powerful tools to readability and understandability, but these should be seen as side effects of Clarity. If ever in doubt about a decision between dry/brevity and clarity. Flexibility is also valuable given Prenda's current state (link to diagnosis doc). There are many instances in which sacrificing DRYness and Brevity for flexibility is the correct choice.*

## Guidelines
- Code sharing between bounded contexts should be avoided by default. *This is a concept borrowed from Domain Driven Design - specifically Bounded Contexts.*

- The only dependencies between Vertical Slices (different command and queries) should be usages of the command or query function from another slice. Using shared code that sits outside the slice is fine. There are occasional exceptions to this rule (link to exception). *Vertical Slices revolve around the axis of change being a slice. We want to couple along the axis of change.*

- Base types representing the shape of domain models should be in the domain directory at the bounded context root. These types can be shared, often for the purpose of derivatives, among slices.

- Domain types, regardless of whether scoped to a slice or scoped to a bounded context, should not depend on code that is not itself either domain code or is a generic utility type (error handling, ts utils, and such). *This is a concept borrowed from Clean/Hexagonal/Onion architecture and key piece in the internal consistency of our domain model if followed. Exceptions to this rule should be very slim or non existent.*

- Repository layer code is the only code that should depend on types representing the shape of database table/view/query/etc. *The implementation details of data persistence should not be exposed to consumers of a domain model that utilizes said persistence. One of the quickest ways to a building a ball of mud is to do let a database schema (slow and risky to change) be the source of truth for the shape of a domain model across all layers and systems. There are cases where this is ok (constrained problem space, prototypes, etc), but this should be avoided by default. More reading (LINK)*

- Don't require more data for a function than is required. *A slim API is less risky to change and easier maintain and reason about.*

- All data should only have a single source of truth. More specifically only a single field on a single table/collection within a given schema should be available for mutation when data needs to be mutated for that field. *It is ok for data to be stored in multiple places as long as the source of truth is always one location.*

- The known errors of a command/query within a Vertical Slice should be included in it's type signature. *It is recommended to coerce exceptions to values for known errors whenever possible, but at minimum no known errors should be exposed from a command/query function by way of thrown exception.*

- If an error represents a possible bad data state there should be documentation regarding this bad data state and how to remediate it. *At minimum there should be a comment attached to the type definition for a given error that provides appropriate context.*

- When a bug is fixed an existing test should be updated to "prove" the fix or a new test should be written to accompany the fix.

## Wiggle Room
This document doesn't aim to define code styling (commads, linting rules, args as object vs not) nor does it aim to define the implementation of given abstractions as long as they don't deviate from the guidelines. *For example you could have one Vertical Slice utilizing a driver to execute queries directly against a database through a connection while another Vertical Slice utilizes an ORM. As long as both slices don't expose database concerns to the consumer of a given slice then both strategies are acceptable. Another example would be tests. Maybe one slice tests itself by unit tests via isolated dependency and mocks + integration tests for side effecst while another test uses just uses api level integration (acceptance) testing. Both are acceptable as long as there is coverage.*

## Future Goals
- If and as we collect more data/it grows in complexity - apply the same decoupling of domains by way of bounded contexts to our databases. *We should condsider breaking up the database. Technical requirements and prudence should drive the implementation of breakup (schemas vs instances, etc). Each new distinct piece should relate to a given bouned context and should house ONLY the data required to support the Vertical Slices of those BCs.*

## Additional Principles
These principles, while value adding, do not directly support the goals nor did they fall into non-goal. As such guidelines were not built around these principles.

