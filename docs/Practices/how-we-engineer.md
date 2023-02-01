---
sidebar_position: 1
---

# Prenda: Engineering Team Principles

## We continuously deliver value to production

** What we do **

* We focus on flow efficiency over resource efficiency
* We frequently release small changes to production
* We set and follow work in progress (WIP) limits
* We track our work on digital kanban boards

** What we encourage **

* We encourage trunk-based development
* We encourage single-piece flow
* We encourage limiting our planning horizon

** What we avoid **

* We do not create big designs up-front
* We do not work unsustainable schedules

## We create our product collaboratively

** What we do **

* We work on cross-functional teams
* We ensure that at least one engineer in addition to the author review all code before it ships
* We integrate early and often within and across teams
* We facilitate integration by documenting as we go
* We make decisions guided by the technology architecture governing board

** What we encourage **

* We encourage pair and mob programming

** What we avoid **

* We do not create knowledge silos
* We do not work in isolation
* We do not hand off work to another group to own

## We architect our system to support responsible, autonomous teams

** What we do **

* We work towards highly cohesive, loosely coupled bounded contexts
* We collaborate with our architecture governing board on system design
* We follow our technology radar

** What we encourage **

* We favor asynchronous integrations between bounded contexts
* We choose practices that match our team and problem context

** What we avoid **

* We do not share data stores between bounded contexts.

## We make data-driven decisions and build data-centric products

** What we do **

* We consider data consumers and publish key data
* We comply with data-related legal codes, such as GDPR
* We ensure business continuity through automated backup processes
* We use data and research to empirically understand our product and its users
* We remove data that is no longer used

** What we encourage **

* We encourage tracking data changes in addition to state
* We encourage publishing data changes to the system

** What we avoid **

* We do our best to limit PII stored with third-party providers
* We do our best to limit syncing DB's and third party tools in arbitrary ways

## We continuously verify the correctness of our code

** What we do **

* We maintain a suite of good unit tests for all production code
* We remove unused and outdated code, relying on history if we need to reference it at a later time

** What we encourage **

* We encourage (acceptance) test-driven development

** What we avoid **

* We do not rely on a separate QA team for testing

## We maintain a clean, secure, high-quality code base

** What we do **

* We take the time to write quality code in order to maintain speed of delivery
* We incorporate technical debt reduction efforts whenever feasible in the course of project delivery
* We make code and documentation better when we’re there

** What we encourage **

* We encourage regular refactoring
* We encourage being thoughtful about code changes, knowing that compromises sometimes must be made, but they should be accompanied by a solid plan to address them.

** What we avoid **
* We avoid rushing coding decisions for the sake of moving fast

## We safely deliver value to production

** What we do **

* We automate our build pipelines
* We release features in stages
* We release new features under feature flags
* We create push-button-simple deployments and rollbacks
* We take responsibility for the security of our product

** What we encourage **

* We encourage deploying during the work day with zero downtime

** What we avoid **

* We do not deploy code with failing tests
* We avoid pushing broken code to production

## We maintain high availability and reliability

** What we do **

* We prioritize uptime and responsiveness for customer-facing systems
* We own the code we ship
* We define infrastructure as code
* We log and monitor our systems
* We rotate on-call duty
* We all learn how to respond to production alerts

** What we encourage **

* We encourage automating everything
* We encourage auto-scaling

** What we avoid **

* We do not permit failures to cascade through the system
* We do not permit single points of failure

## We have a culture of continuous learning and giving back

** What we do **

* We hold regular retrospective meetings
* We perform a post-mortem on every production outage with a written Incident Response summary
* We regularly run experiments

** What we encourage **

* We encourage book clubs, guilds, and discussion groups
* We encourage participating in conferences, meetups, and hack events

** What we avoid **

* We do not accept “we do it this way because we’ve always done it this way.

## We maintain a culture of psychological safety

** What we do **

* We are committed to the [Prenda Values](https://sites.google.com/prenda.co/wiki/people-group/prenda-culture/living-prenda-values)
* We value diversity
* We treat each other respectfully
* We commit to group decisions even when we disagree with them

** What we encourage **

* We encourage radical candor
* We encourage healthy debates and we challenge ideas instead of people

** What we avoid **

* We do not permit passive-aggressive behavior

_We recognize that software development is a rapidly evolving profession, and we accept that our practices and requirements must evolve as well. These are our current practices, but we update them as we learn better ways to deliver customer value._
