# Working with Bounded Contexts in Hub

## Intro
This document defines a number of guidelines to follow while working in Hub. Guidelines for working across projects can be found here (*not yet written*).

These guidelines are intended to lead an engineer towards achieving a set of goals outlined below. These guidelines are based around a set of [useful abstractions](../../glossary.md#useful-abstraction) (UAs).

So what are some of the useful abstractions that we utilize? Some of the notable UAs are Domain Driven Design, Bounded Contexts, Command Query Separation, Verticle Slices Architecture, Functional styled Procedural Programming, Ports and Adapters, The Repository Pattern, and Onion (aka Clean aka Hexagonal) Architecture. Not all UAs are implemented dogmatically, and doing so would lead to many instances of conflict between the UAs. Rather choice core parts from different UAs have been chosen and applied in such a way that these parts are orthogonal to each other and support well the defined goals.


This document will not attempt to answer all critiques of a given guideline or UA nor will it discuss in depth the tradeoffs of why these guidelines and the associated UA(s) are the right tools.

For more on different UAs check out the [learning doc](learning.md).

## Goals
- Code for a given capability is easy to find.
- Changes to a given behavior are less risky.
- The effects of a change to a domain model shape are clear and should cascade and only to those dependents that actually utilize the changes.
- The API of code implementing a behavior is clear. *You should know exactly what data is required to successfully initiate a behavior as well as understanding the expected failures of that behavior*
- Failures due to essential complexity should be uniquely and easily identifiable and bad data states caused by such errors should be easily remediated.
- Code should be covered by automated tests. *Testing strategy and acceptable coverage are not currently specified, but shoot for as much as possible.*
- Flexibility for implementation within defined boundaries. *Unlimited flexibility (autonomy) leads to multiple competing standards, analysis paralysis, lack of direction, and a lack of predictability in code. Inflexibility (too many conventions/only a single way to do something) leads to brittle code, overly complicated code for the purpose of adhering to defined rules, difficulty with corner cases. The sweet spot is one where there are multiple correct implementations that each can be derived from a set of UAs or guidelines. This provides confidence to an engineer because they are able to orient on a UA or guideline for direction while having to autonomy to being able to chart the appropriate course to get there.*

## Non Goals
- Don't Repeat Yourself (DRY) and Brevity at the expensive of clarity. *DRYness and Brevity are often associated with readability and understandability, but these should be seen as side effects of Clarity. If ever in doubt about a decision between dry/brevity and clarity, err on the side of clarity. Flexibility is also valuable given Prenda's current state - history of many pivots and a future requiring pivoting and adaptability.*

## Guidelines
- [UA: Domain Driven Design - Bounded Contexts](./learning.md#bounded-contexts), [UA: Coupling and Cohesion](./learning.md#coupling-and-cohesion) Other than the consumption of a command or query, code sharing between bounded contexts should be avoided by default. There may be cases where a bounded context is implemented in a different project. In this case no dependency should be had on the code of that project and integration must be done asynchronously (http call, event handler, etc).

- [UA: Vertical Slices](./learning.md#vertical-slices), [UA: Coupling and Cohesion](./learning.md#coupling-and-cohesion) The only dependencies between Vertical Slices (different command and queries) should be usages of the command or query function from another slice. Using shared code that sits outside the slice is fine. There are occasional exceptions to this rule, but it is preferred to err on the side of duplication by default. If absolutely need to you find yourself needing to share code between slices it should exist in a `shared` directory at the bouned context root. *Vertical Slices revolve around the axis of change being a slice. We want to couple along the axis of change. Sometimes we might be tempted to share code between two slices. One example is needing to share some type because two slices use a similar shape. An issue arises though when one slice is iterated on and needs to change that shape while another slice doesn't. For this reason it would have been better to duplicate the shape between slices. A rule of thumb is if you plan to share code (type, function, constant, etc.) you need to be VERY sure it represents the exact same concept between slices. Sometimes shared code might actually fit best in an existing shared layer (repository, domain, data)*

- [UA: Domain Driven Design - Bounded Contexts](./learning.md#bounded-contexts), [UA: Clean Architecture](./learning.md#cleanhexagonalonion-architecture), [UA: Derived Types](./learning.md#derived-types), [UA: Coupling and Cohesion](./learning.md#coupling-and-cohesion) Base types representing the shape of domain models should be in the domain directory at the bounded context root. These types can be shared, often for the purpose of derivatives, among slices.

- [UA: Domain Driven Design - Bounded Contexts](./learning.md#bounded-contexts), [UA: Clean Architecture](./learning.md#cleanhexagonalonion-architecture), [UA: Coupling and Cohesion](./learning.md#coupling-and-cohesion) Domain types, regardless of whether scoped to a slice or scoped to a bounded context, should not depend on code that is not itself either domain code or is a generic utility type (error handling, ts utils, and such). *This is a concept borrowed from Clean/Hexagonal/Onion architecture and key piece in the internal consistency of our domain model if followed. Exceptions to this rule should be very slim or non existent.*

- [UA: Clean Architecture](./learning.md#cleanhexagonalonion-architecture), [UA: Repository pattern](./learning.md#repository-pattern), [UA: Persistence Agnosticism](./learning.md#persistence-agnosticism) Repository layer code is the only code that should depend on types representing the shape of database table/view/query/etc. *The implementation details of data persistence should not be exposed to consumers of a domain model that utilizes said persistence. One of the quickest ways to a building a ball of mud is to do let a database schema (slow and risky to change) be the source of truth for the shape of a domain model across all layers and systems. There are cases where this is ok (constrained problem space, prototypes, etc), but this should be avoided by default.*

- [UA: Slim APIs are Easier to Maintain](./learning.md#slim-apis-are-easier-to-maintain) Don't require more data for a function than is required. *A slim API is less risky to change and easier maintain and reason about.*

- [UA: Domain Driven Design - Bounded Contexts](./learning.md#bounded-contexts), [UA: Eventual Consistency](./learning.md#eventual-consistency) All data should only have a single source of truth. *It is ok for data to be stored in multiple places as long as the source of truth is always one location. For concepts that exist within multiple domains (students), it is perfectly acceptable for that concept to have it's source of truth spread across data stores as long as no part (field) of any individual meaning is has it's source of truth in more than one location.*

- [UA: Errors as Values](./learning.md#errors-as-values), [UA: Domain Driven Design - Domain Modeling](./learning.md#domain-modeling) The known errors of a command/query within a Vertical Slice should be included in its type signature. *It is recommended to coerce exceptions to values for known errors whenever possible, but at minimum no known errors should be exposed from a command/query function by way of thrown exception.*

- [UA: Domain Driven Design - Domain Modeling](./learning.md#domain-modeling) If an error represents a possible bad data state there should be documentation regarding this bad data state and how to remediate it. *At minimum there should be a comment attached to the type definition for a given error that provides appropriate context.*

- [UA: Testing](./learning.md#testing) When a bug is fixed an existing test should be updated to "prove" the fix or a new test should be written to accompany the fix.

- [UA: Validation](./learning.md#validatation) Validation should be performed on all handler request data.

## Remediation of code not meeting guidelines
There are cases of existing code not meeting these existing guidelines. Refactoring existing code to meet these guidelines should be seen as tech debt and prioritized accordingly. Effort should be taken to have all new code should meet these guidelines. 

Any code that must break a guideline should be called out, addressed, and either documented for cases which make sense to break a guideline, or have an associated tech debt ticket created in cases where breaking a guideline is required to quickly remediate a critical issue that following a guideline would delay. *An example of this might be a critical bug that needs to be out ASAP. Maybe a fix was written and through existing automated tests + some manual testing + developer intuiton it is determined that this fix works and won't make the problem worse. In this case it is pragmatic to get this fix out even if it ignores the guideline for testing to prove a fix.*

## Conventions
Sometimes guidance that provides more specificity than a guideline needs to exist. 


More often than not this is for enabling better implication. For example a naming convention allows engineers to draw better and more accurate conclusions without needing to review documentation.

Additionally guidelines might be library, framework, or project specific. Defining rules around how to interact with a library for example might be pragmatic if that library has capabilities that by some usages might conflict with existing guidelines.

For the purpose of this document, conventions should be seen as more specific guidelines or extensions to the guidelines.

Naming:
- The entrypoint function for a command or query should start with `command` or `query`.
- The entrypoint function for a command or query should be in a file called `command.ts` or `query.ts` OR in a region called `Command` or `Query`.
- Domain code should either be in files named appropriate to the model/process/rule/etc. within a `domain` directory, or be in a `domain.ts` file, or be in a region called `Domain`.
- Legacy request handlers that are related to a bounded context and are expected to be maintained/iterated should be put in a `legacy-handlers` directory within the appropriate bounded context.
- Integration code for 3rd party services should be in a `Data` directory.
- Repository code (code that interects with a data store), should be in a file called `repository.ts`, OR in a region called `Repository`.
- (Request or Event) Handlers exposing a command should be in a file called `api.ts`, a region called `API`, or in files called `request.ts` or `event.ts` in a directory called `handlers`.
- Integration code for bounded contexts in a different project should be in a `dependent-bcs` directory with sub directories matching tha appropriate bounded context. *As of Jan 24 2023 this is not being utilized. Defining this early to reduce decision overhead when this occurs.*
- CRUD type functions that create new records in a single tab, fetch records by an unique id with no other filters from a single table, or mutate existing records without conditions from a single table, should reside in a directory called `crud-fns` within the shared `repository` directory.

Tests:
- Test files should sit close to the code they test. *Test files that test code in disparate files should be broken up into multiple test files itself.*

SQL:
- Avoid using the [massive scripts directory](https://massivejs.org/docs/functions-and-scripts). Prefer instead to define a query as close to it's consumers as possible. *Defining queries in the scripts directory opens up the possibility of unintended coupling by non cohesive modules. There are solutions to syntax highlighting that don't require a .sql file.*

Routing:
- Handlers should be wired up to routes in files within a directory called `routes` that is at the bounded context root. **

## The Future
- In the very near future it might make sense to refactor out shared repository shapes and functions in the Microschool Administration and Support Bounded Context to a layer that is shared between all bounded contexts. *It's a fact that the lion's share of data utilized by Hub is in a one of the schemas in our postgres instance and utilizing a single shared layer among all consumers within Hub might be the most pragmatic approach.*

- If and as we collect more data/it grows in complexity - we likely will need to apply the same decoupling of domains by way of bounded contexts to our databases. *We should condsider breaking up the database. Technical requirements and prudence should drive the implementation of breakup (schemas vs instances, etc). Each new distinct piece should relate to a given bouned context and should house ONLY the data required to support the Vertical Slices of those BCs.*

- An potential iteration to reduce coupling between between slices in routing is to have each slice directory be able to define it's own unique route while having a shared layer at the bounded context root then reference those definitions. There are many implementations that could achieve this. One could be to use nested routing where each slice/feature set (we don't utilize feature sets yet) would define it's own router and wire handlers and then the bounded context root would aggregate those routers underneath it's own router. Another option is to have each slice define its own unique path constant and have bounded context root simply reference those constants while wiring. 

## Recommendations
These recommendations, while value adding, do not necessitate being a guideline and being subject to the remediation requirements of a guideline. They are worth understanding and applying as fit.

- Validate at all IO boundaries (guideline above indicates just handler request data). *Typescript can be a powerful tool, but it is only useful at compile time (as you write and build code). Validating that data being ingested by a process written using Typescript can go a long way in ensuring that the type safety provided by Typescript is reliable. Omitting validation at a boundary leaves room for undesirable behavior and sneaky errors (imagine getting "cannot read property X of undefined" when the type system supposedly doesn't allow it)*

- Endeavour to make invalid states impossible. [Examples](./examples.md#endeavour-to-make-invalid-states-impossible)

## Wiggle Room
This document doesn't aim to define code styling (commads, linting rules, args as object vs not) nor does it aim to define the implementation of given abstractions as long as they don't deviate from the guidelines. *For example you could have one Vertical Slice utilizing a driver to execute queries directly against a database through a connection while another Vertical Slice utilizes an ORM. As long as both slices don't expose database concerns to the consumer of a given slice then both strategies are acceptable. Another example would be tests. Maybe one slice tests itself by unit tests via isolated dependency and mocks + integration tests for side effecst while another test uses just uses api level integration (acceptance) testing. Both are acceptable as long as there is coverage.*

## Contributing
TODO

### Process to change
TODO

### Tips for changes
Guidelines:
- Make sure a guideline implements the intent of a UA - whether it's a new or existing one.
- Try and be as flexible as possible. *For example the Guideline "Don't require more data for a function than is required." doesn't actually specify whether a function should take an object with fields as a single argument or simply take multiple arguments. While there are arguments for both sides, it really doesn't matter in the context of the guideline whether or not you take a single object vs multiple arguments.*

Conventions:
- Ask if a convention is really needed or not. Due to the specificity of conventions, a bad convention can end up causing more harm than benefit.
- Does a convention support or extend (provide more context) to an existing guideline. If not, then does it support a goal or help bring clarity to a project? Would this simply be better as a some "suggestion" text in the project README or a discussion in slack/github/meeting?

