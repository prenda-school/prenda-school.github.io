# Useful Abstractions
The following are simply links to [useful abstractions](../../glossary.md#useful-abstraction) (UAs) that may or may not be references by the [guidelines](./hub.md#guidelines) for Hub. These are **intended as reference material to facilitate understanding and are not a canonical list of UAs we implement** in full or part within Hub or elsewhere.

## Coupling and Cohesion
**This may be the most important concept to understand. The holy grail in software design and architecture is high cohesion and low coupling. This is easier said than done.**
- [Coupling and Cohesion Short](https://www.youtube.com/shorts/K_Z9FJ7jdFo) *1 min watch*
- [Highly COHESIVE Software Design to tame Complexity](https://www.youtube.com/watch?v=r0-GC3Y_OME) *9 min watch*
  > [In large systems, the idea of having a single entity live in a single table just isn't reality](https://youtu.be/r0-GC3Y_OME?t=128). *This quote and the example he gives can be applied to many entities within Prenda software: [Micro]school, term, guide, etc.*
- [Low Coupling, High Cohesion](https://medium.com/clarityhub/low-coupling-high-cohesion-3610e35ac4a6) *3 min read*
- [AVOID Entity Services by Focusing on Capabilities (snippet)](https://youtu.be/2gOOstEI4vU?t=383) *2 min watch - watch from linked timestamp*
- [SOLID Principles? Nope, just Coupling and Cohesion](https://www.youtube.com/watch?v=YDNR_gfBk0Q&ab_channel=CodeOpinion) *14 min watch*
  > [In my experience, informational cohesion can really drive a large degree of coupling.](https://youtu.be/YDNR_gfBk0Q?t=228). *Informational Cohesion has it's place. But the switch from thinking with a focus on Informational Cohesion to a focus on Function Cohesion aligns you closer with business concerns and frees you from the mental gymnastics required managing coupling and cohesion while aligning new features and support of old features against an information focused system - data supports capabilities, not the other way around.*

## Validatation

## Vertical Slices

## Bounded Contexts

## Domain Modeling
- [Errors as Documentation](https://aldesantis.medium.com/fail-better-turning-software-errors-into-documentation-764a6bb7d71f)

## Clean/Hexagonal/Onion Architecture

## Ports and Adapters

## More than CRUD

## Slim Apis are Easier to Maintain 

## Testing

## Make Invalid States Impossible

## Persistence Agnosticism

## Eventual Consistency

## Repository Pattern

## Functional vs Object Oriented vs Procedural

## Derived Types

### [Synchronized Derived Types](https://javascript.plainenglish.io/typescript-how-to-create-synchronized-derived-types-4bf2371a9eab) *5 min read*

## Imperative vs Declarative

## Command Query Separation

## Errors as Values


# Additional Learning

## High Optionality Programming
[Article]([Article]) *~10 minute read*

[Video](https://www.youtube.com/watch?v=ZUiuh_n6HKg&ab_channel=Petabridge) *22 min watch*.

> [The earlier you are in a project's lifecycle, the more options you have and the less expensive they are then.](https://youtu.be/ZUiuh_n6HKg?t=459). *We should pay a premium here when the options are abundant and the cost is relatively low.*

> (Top Youtube Comment) The essence of architecture is at least as much about what changes are anticipated as it is about what is built.
> Every architectural choice you make is a bet on the relative likelihood of different changes in the future. *How good a bet you can make a function of an understanding of core software design principles and experience in making (not avoiding) learning from the outcomes of bets.*

> [Technical Debt is the Destruction of Options.](https://youtu.be/ZUiuh_n6HKg?t=537)

Examples of technical debt:
- Tight coupling based on [information cohesion](../../glossary.md#informational-cohesion) causing issues when bumping into [functional cohesion](../../glossary.md#functional-cohesion). The bloating of collections in mongo or tables in Hub, entity classes/types in Hub, or different modules in Zoho are good examples.
- Tight coupling of unrelated concerns. There are cases where changing the alias of a column in a sql query or a field on a table would require changes all the way up to a React component.
- Any of the data integrity issue's we've had or STILL have and haven't resolved (school/term statuses, guide data, parent data, microschool data, etc.).
- The lack of a *single* and *independent* Authorization capability to serve all consumers.
- Not identifying the distinct stages of business processes and the owners for those stages.
- Not identifying the life cycle of data within our system.
- Building solutions to solve "this year's problems".
