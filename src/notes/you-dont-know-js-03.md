---
path: "/you-dont-know-js-03"
date: "2021-03-05"
title: "You Don't Know JS - 03 Surveying JS"
tags:
  - javascript
  - ydkjs
description: "Iteration and iterables, closure, this keyword and object prototypes. 🤯"
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md)

## Iteration

- used for consuming data one chunk at a time
- The iterator pattern defines a data structure called an "iterator" that has a reference to an underlying data source, which exposes a method like `next()`.
- The ES6 protocol defines a **next()** method whose return is an object called an iterator result; the object has **value** and **done** properties, where done is a `boolean` that is false until the iteration over the underlying data source is complete.
- The data source will be consumed one value at a time, checking after each `next()` call for done to be `true` to stop the iteration.

## Consuming iterators

- `for ... of` loops
- **spread** operator - spread an iterator into an array or an argument list

```
var vals = [ ...it ];
doSomethingUseful( ...it );
```

**🤔 `...` acts both as a spread operator and a rest parameter?**

- **Rest parameter**: collects all remaining elements into an array.

```
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}
```

- **Spread operator**: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

```
const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
```

**🤔 Why is `map` not considered a default consuming iterator?**

- Because with `map`, the iteration is not just over the map's values but instead its entries.
- An entry is a tuple (a 2-element array) including both a key and a value.

**🤔 What is a `Map()` constructor?**

- `new Map([iterable])`
- is an iterable of an array or other iterable object whose elements are key-value pairs

```
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
```

## Iterables

- an iterable is a value that can be iterated over
- iterables can be strings, arrays, maps, sets, and others.
- For the most part, all built-in iterables in JS have three iterator forms available: keys-only `keys()`, values-only `values()`, and entries `entries()`.

- **Keys** are the property names inside of an object.
- **Values** are property values associated with property names.
- **Entries** are the (key-value) pairs of property names and their values.

## Closure

- Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.
- In other words: when a function is defined, it is attached to its enclosing scope via closure.
- Scope is the set of rules that controls how references to variables are resolved.
- Closure is part of the nature of a function. Objects don't get closures. Functions do.
- To observe a closure, you must execute a function in a different scope than where that function was originally defined
- Closure is most common when working with asynchronous code, such as with callbacks.

🤓 Aaaaand another definition:

- Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
- Closure doesn't close over a value, nor is it a snapshot - it closes over a variable with a live link.

## the `this` keyword

- `this` is not a fixed characteristic of a function based on the function's definition, but rather a dynamic characteristic that's determined each time the function is called (aka depending on the execution context)
- again, `this` is not determined by the function definition, but rather by how the function was invoked (aka executed aka `()`).
- a `this`-aware function can have a different context each time it's called - which makes it more flexible and reusable

**🤔 What is an execution context?**

- It is a tangible object whose properties are made available to a function while it executes.

🤓 More resources! Understanding the `this` keyword explanation by [Gordon Zhu](https://github.com/gordonmzhu/cheatsheet-js)

**🤔 What are the four different ways of invoking a function?**

1. implicit binding (the namespace pattern)
2. `call`, `apply`, `bind` methods
3. binding with the `new` keyword: the `this` keyword will point at a brand new empty object
4. the fallback, default binding (global object)

🤯 Arrow functions do not define their own `this` keyword, which means that if `this` is used inside an arrow function, it will lexically resolve to some enclosing scope that does define the `this` keyword (which is the behavior you might want!)

But arrow functions do still have their lexical scope!

🤯 Just because objects use curly braces doesn't mean that they define a new scope, which means that the object's properties aren't lexically scoped.

## Prototypes

- Where `this` is a characteristic of function execution, a `prototype` is a characteristic of an object, and specifically resolution of property access.
- A prototype is a linkage between two objects.
- This prototype linkage occurs when an object is created; it's linked to another object that already exists.
- A series of objects linked together via prototypes is called the **prototype chain**.
- Objecst are built by constructor calls (via `new`).
- A **class** is a blueprint, and an **object** is its instance.
- A constructor call makes an object linked to its own prototype.

**🤔 What is dunder prototype?**

- It's a getter function on `Object.prototype`.

## Object Linkage

- To define an object prototype linkage, you can create the object using an `Object.create(..)` utility.
- `Object.create(null)` creates an object that is not prototype-linked anywhere, so it's purely just a standalone object; in some circumstances, that may be preferable.
- When we look up an object property, and it doesn't exist, we go up the object chain to look for that property.
- But the cool/magical thing is that `this` will remain the same `this` from the call site.
