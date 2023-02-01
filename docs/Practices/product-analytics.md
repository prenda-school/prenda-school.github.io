---
sidebar_position: 3
---

# Product Analytics

We rely on a set of tools that allow product managers and teams to accurately analyze user engagement and behavior in and across our applications. We abide by a series of norms for consistent user identification, grouping, and event tracking.

:::note tl;dr

In the Segment web app,

- Create sources for application by each environment (development, staging, and production)
  - Follow naming convention: "Application (env)"
- Connect sources to destinations
  - Setup destinations if not done already (again by environment)

In your project,

- Install Segment snippet and load API Write Key by environment
  - Remove all other analytics libraries
- Track events imperatively, as a result of user actions
  - Follow naming convention: "Location - Sub-Location - Object Action"

:::

:::info quick links

- [Segment app login](https://app.segment.com/login)
- [Heap app login](https://heapanalytics.com/login)

:::

## Data flow

We rely on [Segment](https://segment.com/) ([web application](https://app.segment.com/), credentials are in shared password manager), a customer data platform by Twilio that allows for a single, consistent intake, connection, and output of data for analytics. Instead of installing several tools in each application that each have their own API, requirements, and broader integrations, we advantage Segment's ["Connections"](https://segment.com/docs/connections/) paradigm. In Segment, data flows in from "Sources" and out to "Destinations". Segment takes care of all the necessary aggregation, transformation, and communication required in the connections between our applications and tools.

### Sources of data

We setup an application or other unique source of data as a ["Source"](https://segment.com/docs/connections/sources/) ([directions](https://segment.com/docs/connections/sources/#create-a-source)) in Segment for each environment that the code runs in. Our source names follow a standard format: **Application Name (env)**. For example, "Prenda World (prod)", "Prenda World (dev)", "Marketplace (prod)", etc.

### Data analysis tools

We setup a tool used to analyze data (like Heap or Google Analytics) as a ["Destination"](https://segment.com/docs/connections/destinations/) ([directions](https://segment.com/docs/connections/destinations/#add-a-destination)) in Segment ideally for each environment that the code runs in. Our destination names follow a standard format: **Tool Name (env)**. For example, "Heap (prod)", "Heap (dev)", etc.

### Capturing user data

We capture user data in the spirit of [The Segment Spec](https://segment.com/docs/connections/spec/) -- the linked documentation is extremely useful for anyone engaging in product analytics. We identify users with a stable, unique identifier that available across all sources: their Prenda Hub ID. We respect and advantage [the reserved user traits](https://segment.com/docs/connections/spec/identify/#traits) that Segment defines. We track the actions that users take with a unique name and custom set of properties.

Our custom event properties do not include user identity information or other general metadata. Segment takes care of associating events with users and their identity information, and tracking metadata like location and time ([example event in json format](https://segment.com/docs/connections/spec/track/#example)).

Our event names follow a standard format: **Location - Sub-location (optional) - Object Action**. Event properties

The **location** is your application (or other unique source). The **object** (a noun) is the piece of the app that the user is interacting with. The **action** (a past tense verb) is how user interacts with that object -- it is a . A **sub-location** can be used to help distinguish events that would otherwise have the same name or that benefit from being grouped by sub-page, area, or feature -- it is optional. For each part, use Proper Case. For example,

- Prenda World - Goal Updated
- Prenda World - Microschool Profile Updated
- Prenda World - Payment Information - Read More Link Clicked
- Marketplace - Start Enrollment Clicked
- Marketplace - Guide Biography Expanded
- Marketplace - Grades Filtered
- Marketplace - Main Search - Map Dragged
- Marketplace - Microschool Details - Map Dragged

Sometimes, the object isn't exactly a "piece of the app" but is a reasonable transformation. For example, in "Prenda World - User Logged In" could have been "Prenda World - Account Logged In" because "account" is closer to a piece of the app, however "user" is a friendlier object name for future analysis.

It is _not_ acceptable to break the standard format unless _absolutely_ necessary.

Our event name standard is a combination of [Segment's "naming conventions for clean data"](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/) and [Heap's location prefixing under "naming conventions"](https://help.heap.io/data-management/data-management-features/naming-conventions-overview/). Both linked articles are great resources to review for clarity on why a standard is useful, what ours is composed from, and how it can be applied.

:::caution Troubleshooting Heap

The Segment to Heap integration has peculiarities you should be aware of,

- Only the `identify` and `track` calls can flow into Heap.
- Events from Segment only show up as "Custom Events"
- Events may take 24 hours for Heap to fully register them (events commonly do not show up or appear and disappear initially).
- Nested objects or arrays in event properties or user traits are flattened or stringified, respectively.

These are highlights of developer experience and [Segment documentation on the Heap destination](https://segment.com/docs/connections/destinations/catalog/heap)

:::
