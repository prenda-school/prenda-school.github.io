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

## Non Goals
- Don't Repeat Yourself (DRY) and Brevity at the expensive of clarity. *DRYness and Brevity are powerful tools to readability and understandability, but these should be seen as side effects of Clarity. If ever in doubt about a decision between dry/brevity and clarity. Flexibility is also valuable given Prenda's current state (link to diagnosis doc). There are many instances in which sacrificing DRYness and Brevity for flexibility is the correct choice.*

## Guidelines
Code sharing between bounded contexts should be avoided by default. *This is a concept borrowed from Domain Driven Design - specifically Bounded Contexts.*

The only dependencies between Vertical Slices (different command and queries) should be usages of the command or query function from another slice. Using shared code that sits outside the slice is fine. There are occasional exceptions to this rule (link to exception). *Vertical Slices revolve around the axis of change being a slice. We want to couple along the axis of change.*

Base types representing the shape of domain models should be in the domain directory at the bounded context root. These types can be shared, often for the purpose of derivatives, among alices.

Domain types, regardless of whether scoped to a slice or scoped to a bounded context, should not depend on code that is not itself either domain code itself or is a generic utility type (error handling, ts utils, and such). *This is a concept borrowed from Clean/Hexagonal/Onion architecture and key piece in the internal consistency of our domain model if followed. Exceptions to this rule should be very slim or non existent.*

Repository layer code is the only code that should depend on types representing the shape of database table/view/query/etc. *The implementation details of data persistence should not be exposed to consumers of a domain model that utilizes said persistence. One of the quickest ways to a building a ball of mud is to do let a database schema (slow and risky to change) be the source of truth for the shape of a domain model across all layers and systems. There are cases where this is ok (constrained problem space, prototypes, etc), but this should be avoided by default. More reading (LINK)*

## Future