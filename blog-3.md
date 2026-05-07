# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

When I first learned TypeScript, I used to write separate functions for different data types.  
Like one function for `string[]`, another for `number[]`, and so on. It worked, but it was repetitive.

Then I learned Generics, and things became much cleaner.

## What are Generics?

Generics let us write one reusable function, class, or component that works with multiple data types while still keeping strict type safety.

Instead of hardcoding a type, we use a type variable (commonly `T`) as a placeholder.

## Simple function example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([10, 20, 30]); // number
const firstString = getFirstElement(["a", "b", "c"]); // string
```

Here, one function works for both numbers and strings.  
TypeScript automatically understands the return type based on input.

## Why this is better than `any`

If we used `any`, TypeScript could not protect us properly.

```ts
function getFirstElementAny(arr: any[]): any {
  return arr[0];
}
```

This is flexible, but unsafe.  
With Generics, we get both flexibility and safety.

## Generic interface example

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

type User = { id: string; name: string };
type Product = { id: string; price: number };

const userResponse: ApiResponse<User> = {
  success: true,
  data: { id: "u1", name: "Adnan" },
  message: "User fetched",
};

const productResponse: ApiResponse<Product> = {
  success: true,
  data: { id: "p1", price: 100 },
  message: "Product fetched",
};
```

Same response structure, different data types, full type safety.

## Generics in reusable UI components (idea)

In frontend, Generics are very useful for reusable components like tables, dropdowns, and forms.

Example: one table component can render users, products, or orders if we define it with a generic type like `<T>`.  
So we avoid building the same component again and again.

## Final thoughts

Generics help us:
- write less duplicate code
- keep functions/components reusable
- get strict typing for different data shapes
- catch mistakes at compile time

So Generics are one of the best TypeScript features for writing scalable and maintainable code.
