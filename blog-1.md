# Why `any` is Risky and `unknown` is Better in TypeScript

When I first started learning TypeScript, I used `any` a lot because it felt easy.  
No errors, no complaints, everything just worked... until runtime.

## Why `any` is called a type safety hole

`any` basically disables TypeScript checking for that variable.

```ts
let value: any = "hello";
value = 123;

console.log(value.toUpperCase()); // Runtime crash
```

Here, `value` was a string first, then became a number.  
But TypeScript still allowed `toUpperCase()`.  
That is the problem with `any`: it hides mistakes.

## Why `unknown` is safer

`unknown` can store any value too, but you cannot use it directly without checking.

```ts
let value: unknown = "hello";

console.log(value.toUpperCase()); // TypeScript error
```

This is actually helpful. TypeScript forces us to check the type first, so we avoid unexpected bugs.

## Type narrowing (simple idea)

Type narrowing means checking a value's type before using it.

```ts
function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length); // safe
  }
}
```

Inside the `if`, TypeScript now knows `value` is a string.

## Final thoughts

- `any` is quick, but unsafe
- `unknown` is strict, but safer
- type narrowing helps us write reliable code

So for API data, user input, or anything uncertain, I now prefer `unknown` over `any`.
