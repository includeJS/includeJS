---
path: "/you-dont-know-js-04"
date: "2021-03-06"
title: "You Don't Know JS - 04 The Bigger Picture"
tags:
  - javascript
  - ydkjs
description: "Three pillars of JS: scope & closure, prototypes, types & coercion. 🤯"
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch4.md)
- 📺 Additional resource: [Deep JavaScript Foundations on FrontEnd Masters](https://frontendmasters.com/courses/deep-javascript-v3/)

## 1. Scope and Closure
- JavaScript organizes scopes with functions and blocks.
- Scopes nest inside each other, and for any given expression or statement, only variables at that level of scope nesting or in higher/outer scopes are accessible; variables from lower/inner scopes are hidden and inaccessible.

So, in a nutshell:

- A function declaration produces a new scope.
- compile-time (aka parser time): the compiler and the scope manager handle the scoping before JS code is executed
- the lexical scope is used at runtime - by the JS engine -  but declared at the compiled time!
- That's called **two-pass processing**

**🤔 What is the lexical scope mechanism of JavaScript?**

- the idea of scopes being nested within each other
- the idea that the compiler, parser is figuring out those scopes ahead of time before being executed (like lexer - the first stage of parsing)
- lexical scope is fixed at the author time. It's predictable, not affected by runtime conditions.
- VS dynamic scope (e.g., bash script), which is based upon conditions at runtime.

**🤔 What are the two ways of interacting with a variable?**

- **assigning** a value to the variable (**target position**)
- **retrieving** the variable's value (**source position**)
- (there will be a lookup process in any case)

**🤔 What is the TDZ (temporal dead zone) error?**

- It exists because of `const`: because if `const` was initialized as `undefined` (when hoisted), and then again changed to its intended value, that would be a type change (which `const` doesn't allow!).

**🤔 What is shadowing?**

When you have two variables at different scopes, have the same name.

**🤔 What is an auto-global?**

Dynamically creating variables on the global scope (during run time, not compile time) - this is something you should avoid doing! This can't be done if you have `strict mode` enabled (you would get a `ReferenceError`).

**🤔 What is the difference between undefined and undeclared?**

- **undefined** means a variable exists, but a the moment it has no value
- **undeclared** means never formally declared in any scope that we have access to (in strict more that always results in a reference error)

**🤔 What is the principle of the least privilege?**

It suggests that you should default everything to private and only expose the minimal necessary. It's one of the core CS principles and a defensive approach.

This helps us avoid the following problems:

1. naming collision
2. protecting your values from being misused
3. protecting yourself from future refactoring

### Named Function Expressions (vs anonymous function expressions)

- the anonymous function expressions are much more popular, but the author makes the following case for using the named function expressions instead, to achieve:

1. Reliable function self-reference (recursion, etc.)
2. More debuggable stack traces
3. More self-documenting code

**🤔 Why does an IIFE do?**

- Creates a scope and immediately invokes that function. You can only call that function once.
- IIFE is an expression, not a declaration.
- You would use an IIFE every time you need an expression, and anytime you need a statement or a scope in an expression position.

### Hoisting

- Variable hoisting is usually bad; function hoisting is pretty useful.
- Function declarations get hosted, function expressions not.
- It might improve readability to put the executable code on the top,  and function declarations on the bottom
- `let` and `const` hoist to a block, `var` hoists to a function
- during hoisting `var` variables are initialized as `undefined` (so both defined and initialized)
- `let` &`const` are only defined

**🤔 Why can't function expression be hoisted?**

- When you assign a function expression to a variable, the variable's declaration is hoisted, but the assignment happens at runtime.
- Executable code can't conceptually be reordered. Only declarative code can be.

## 2. Prototypes

- JS is one of the very few languages where you have the option to create objects directly and explicitly without first defining their structure in a class.

(more in latter chapters)

## 3. Types and Coercion

Falsy values:

- `0`, `-0`
- `null`
- `Nan`
- `false`
- `undefined`

- You are already doing coercion whenever you put a value that is not a string inside string literals (`${}`)!
- If you want to be explicit about it you could do:`${String(numValue)}`

- `+ operator`
- if either of the values is a string, `+` prefers to do concatenation (instead of addition)

The ""root of all evil in JS"":

```
Number("")
0
```

**🤔 What is Boxing?**

- it's a form of implicit coercion
- When you are accessing methods on primitives - JS goes and makes an Object out of that.
- So essentially, it's a primitive that has an optimization in it where you can access the property as if it was an object.
- JavaScript's dynamic typing is not a weakness; it's one of its strong qualities.
- Implicitness is a form of abstraction. Not all abstractions are good, but some abstractions are necessary. - Benefits: hiding unnecessary details, re-focusing the reader, and increasing clarity. We are trying to answer the question: **Is showing the reader the extra type details helpful or distracting?**
