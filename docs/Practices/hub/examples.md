# Examples

## Hub Directory Structure
```
// WIP
bounded-contexts
  some-bc-1
    domain            // base domain code for some-bc-1
    data              // integration code for external resources
    dependent-bcs     // integration code for other bounded contexts
    legacy-handlers   // old code not following new architecture
    repository        // shared database code for all slices
      crud-fns        // functions that mutate data a single entity w/o condition or search by a unique id w/o filtering
        find-entity1-by-id.ts
        insert-entity2.ts
      entity1.ts      // types representing database tables required for entity1
      entity2.ts      // types representing database tables required for entity2
    commands
      some-command-1
        index.ts      // An index.ts file with API, command, domain, and repository regions
      some-command-2
        api.ts
        command.ts
        domain.ts
        repository.ys
      some-command-3
        handlers
          request.ts
          event.ts
        command.ts
        domain.ts
        repository.ts
    queries
      some-query-1
        index.ts      // An index.ts file with API, query, domain, and repository regions
      some-query-2
        api.ts
        domain.ts
        query.ts
        repository.ts
    routes
  some-bc-2
```

## Endeavour to make invalid states impossible

### Example 1
If performing operations that utilize an email address which must be validated, consider creating a branded type rather than utilizing a `string`. This way it becomes very clear which functions within your application need a validated email and which ones don't care.
```typescript
// Original
const sendEmail = (emailAddress: string) => {/* stuff */}

// With Branded Type
type ValidatedEmail = { 
  _tag: "ValidatedEmail"; 
  value: string 
}
const sendEmail = (emailAddress: ValidatedEmail) => {/* stuff */}
``` 

### Example 2
Sometimes you need to represent a single concept which can take on different shapes based on it's kind. It can be tempting to tack on all the fields that might be required for all the kinds on a single type. Here are a few of the many problems you can face by doing this:
- The type can become bloated
- You end up optionalizing all the fields that aren't common among the kinds
- You potentially may end up operating on an object which is invalid due to conflicting fields from different kinds

To resolve this, extract out the common fields to one type, create a different type for each of the kinds, then utilize the compositional to create a shape which does not allow for an invalid representation.
```typescript
// Original Version 1
type School = { 
  name: string; 
  
  // Family Data
  familyField1?: string
  familyField2?: boolean
  
  // Partner Data
  partnerField1?: string
  partnerField2?: number
}

// Original Version 2
type School = {
  name: string;
  type: "family" | "partner"
  
  // Family Data
  familyField1?: string
  familyField2?: boolean
  
  // Partner Data
  partnerField1?: string
  partnerField2?: number
}

// With Union
type SchoolBase = {
  name: string
}
type FamilySchool = { 
  _tag: "FamilySchool"; 
  familyField1: string
  familyField2: boolean
}; 
type PartnerSchool = { 
  _tag: "PartnerSchool"; 
  partnerField1: string
  partnerField2: number
}
type School = SchoolBase & (FamilySchool | PartnerSchool); 
```