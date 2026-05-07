# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

When working in TypeScript, we often create one main interface that contains all fields of a model.  
For example, a `User` may have id, name, email, password, role, createdAt, etc.

At first, many  developers create separate interfaces again and again for different use cases like:
- showing public profile
- creating a new user
- updating user data
- sending safe response to frontend

This causes duplication. If the main interface changes, we need to update many places manually.  
That is where `Pick` and `Omit` become super useful.

## Master interface example

```ts
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
}
```

## `Pick`: take only what you need

`Pick` creates a new type by selecting specific properties from a master interface.

```ts
type UserPublicProfile = Pick<User, "id" | "name" | "email">;
```

Now `UserPublicProfile` contains only those 3 fields.  
No need to write a new interface manually.

## `Omit`: remove what you do not need

`Omit` creates a new type by excluding specific properties.

```ts
type SafeUserResponse = Omit<User, "password">;
```

This is very common in backend apps where we must never expose password in API response.

## How this prevents duplication

Without utility types, we might write:
- `UserProfile`
- `UserResponse`
- `UserForAdmin`
- `UserForList`

Most of these share many same fields, so we repeat code.  
With `Pick` and `Omit`, we define fields once in the master interface and generate smaller slices when needed.

If `User` changes later (example: add `phone`), related types stay consistent automatically where applicable.

## Why this keeps code DRY

DRY means: do not repeat the same logic/structure in multiple places.

`Pick` and `Omit` help DRY because:
- one source of truth (`User` interface)
- less repeated property declarations
- fewer update mistakes during refactor
- cleaner and more maintainable codebase

## Final thought

`Pick` and `Omit` are small utility types, but in real projects they save a lot of time.  
They help us build specialized types from one master interface in a safe and reusable way.  
So instead of rewriting similar interfaces again and again, we can keep code simple, consistent, and DRY.
