---
path: "/you-dont-know-js-02"
date: "2021-03-04"
title: "You Don't Know JS - 02 Surveying JS"
tags:
  - javascript
  - ydkjs
description: "Primitives vs objects, typeof, variable declaration, functions, comparisons, classes, modules. 🤯"
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md)

## Standalone vs. module

- JS treats files like programs, meaning if one fails (during parse/compile or execution), that will not necessarily prevent the following file from being processed.

- 💡 But! Many projects use build process tools that combine separate files from the project into a single file to be delivered to a web page. When this happens, JS treats this single combined file as the entire program.

**🤔 What is a module?**

A module is a collection of state and publicly exposed methods to operate on that state.

## Values

- Either a **JS primitive** or an **object**
- In JavaScript, variables don't have types; values do.

## Primitive types

A type is a set of intrinsic characteristics that we expect to do with that value.

- `string`
- `number`
- `boolean`
- `symbol` (used as special keys on objects, mostly used in low-level code such as in libraries and frameworks)
- `null`
- `undefined` (the default value, does not currently have a value)

The last two indicate emptiness (or absence) of a value.

## Arrays and objects

- `array`: a special type of object that's comprised of an ordered and numerically indexed list of data 👍
- JS arrays can hold any value type, either primitives or an object.

- `function`: like arrays, are a special kind (aka, sub-type) of `object`.

- `object`: an unordered, keyed collection of any various values
- with objects you access the element by a string location name (aka "key" or "property") rather than by its numeric position (as with arrays)

## Types
```js
- typeof 42;                  // "number"
- typeof "abc";               // "string"
- typeof true;                // "boolean"
- typeof undefined;           // "undefined"
- typeof null;                // "object" 😱
- typeof { "a": 1 };          // "object"
- typeof [1,2,3];             // "object" (should be array?) 😱
- typeof function hello(){};  // "function" 😱
```

## Variables

- `let` allows for block scoping, and signals a local usage of a variable
- `var` for declaring variables that will be seen by a wider scope (aka not block scoped)
- `const` must be given a value when it's declared and cannot be reassigned to a different value later.
- `const` declared variables are not "unchangeable". They just cannot be reassigned (you can still change values inside objects and arrays, but you can't reassign a different type to that variable) - Note to self: changing an objects is not reassigning a type init?
- If you stick to using `const` only with primitive values, you avoid any confusion of re-assignment (not allowed) vs. mutation (allowed)!

**🤔 What is block scoping?**

- It's enclosing a part of code with { } - instead of a function, for example.
- A block doesn't become a scope until it has `let` or `const` declared inside of them 🤯

## Functions

- in JS, a function is a **procedure**.
- A procedure is a collection of statements that can be invoked one or more times, may provided some inputs, and may give back one or more outputs.

### Function declaration

- is a statement in itself, not an expression in another statement 🤔
- The association between the identifier `awesomeFunction` and the function value here, happens during the compile phase of the code before that code is executed.

```js
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}
```

### Function expression

- Different from the function declaration form, a function expression is not associated with its identifier until that statement is executed during runtime.

```js
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
};
```

**🤔 Once again for the folks sitting at the back, what is the difference between a function expression and function declaration?**

- function declarations add their name to the enclosing scope, whereas function expressions add their identifier into their own scope.
- in JS, functions are values that can be assigned and passed around
- JS functions are a special type of the `object` value type
- functions can receive parameters
- and return a single value using a `return` keyword
- you can wrap the values in an object/array to return multiple values
- functions are values and can be assigned as properties on objects

## Comparisons

- All value comparisons in JS consider the type of the values being compared, not just the `===` operator.
- Specifically, `===` disallows any type of conversion (aka, "coercion") in its comparison, where other JS comparisons do allow coercion.
- 💡 Meaning! that `==` and `===` are exactly the same when the types match 🤯

😰 Edge cases

```js
NaN === NaN;            // false use Number.isNaN(..) instead
0 === -0;               // true use Object.is(..)

```

💡 But this is useful! `null == undefined` - aka empty value - meaning you can check for `null`, and this will automatically encompass the `undefined` checks as well.

- Rather than calling `NaN` not a number, you should think of it as an invalid number.
- `Nan` is the only value without the identity property (it's not equal to itself)
- Warning! The original `isNan ()` coerces values to numbers before checking if they are `Nan`, that's why we use `Number.isNan()` instead 👍
- you could think of `Object.is(..)` as the "quadruple-equals" `====`, the really-really-strict comparison!
- In JS, all object values are held by reference are assigned and passed by reference-copy and are compared by reference (identity) equality.
- The array structure and contents don't matter in this comparison, only the reference identity.
- To do a structural equality comparison, you'll need to implement the checks yourself.

```js
var x = [ 1, 2, 3 ];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x;

y === x;              // true
y === [ 1, 2, 3 ];    // false
x === [ 1, 2, 3 ];    // false
```

## Coercive Comparisons

- Coercion (aka type conversion) means a value of one type being converted to its respective representation in another type (to whatever extent possible).
- If the comparison is between the same value type, both `==` and `===` do exactly the same thing, no difference whatsoever.
- If the value types being compared are different, the `==` differs from `===` in that it allows coercion before the comparison.
- the `==` tends to reduce everything to numbers (`ToNumber()`) to make the comparison
- also, `==` only compares primitives. If one of the values isn't primitive, it will run a `ToPrimitive` on it
- Instead of "loose equality," the == operator should be described as "coercive equality."
- `==` is not about comparisons with unknown types!

**🤔 When should you avoid using `==`?**

- `==` with 0 or `""` (or even `"   "`)
- `==` with non-primitives
- `==` true or `==` false: allow `ToBoolean` or use `===`

👍 Use `==` when you know the types, and use `===` when you don't know the types.

## Classes

- a class in a program is a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data. 🤔
- classes define how such a data structure works, but classes are not themselves concrete values.
- you can instantiate a class with the `new` keyword
- fundamental objects in JS that you should instantiate with `new` are: `Object()`, `Array()`, `Function()`, `Date()`, `RegExp()`, `Error()` - but NOT! `String()`, `Number()`, `Boolean()`
- use the last three as functions but not as a constructor
- reasons for using classes: to organize code, make it easier to read, and reason about said code, avoid bugs and make maintenance easier.

### Class inheritance (aka polymorphism)

- Inheritance is a powerful tool for organizing data/behavior in separate logical units (classes), but allowing the child class to cooperate with the parent by accessing/using its behavior and data.
- use extends clause to extend the general definition of a class

**🤔 What is polymorphism?**

The fact that both the inherited and overridden methods can have the same name and co-exist.

## Modules

- like classes, modules aim to group data and behavior into logical units

### Classic modules

- The key hallmarks of a classic module are an outer function (that runs at least once), which returns an "instance" of the module with one or more functions exposed that can operate on the module instance's internal (hidden) data.

- The class form stores methods and data on an object instance, which must be accessed with the `this. prefix`. With modules, the methods and data are accessed as identifier variables in scope, without any `this. prefix`.

- With class, the "API" of an instance is implicit in the class definition—also, all data and methods are public. With the module factory function, you explicitly create and return an object with any publicly exposed methods, and any data or other unreferenced methods remain private inside the factory function.

### ES Modules

- ES modules (ESM), introduced to the JS language in ES6, are meant to serve much the same spirit and purpose as the existing classic modules

- First, there's no wrapping function to define a module. The wrapping context is a file. ESMs are always file-based; one file, one module.

- Second, you don't interact with a module's "API" explicitly but rather use the export keyword to add a variable or method to its public API definition. If something is defined in a module but not exported, then it stays hidden (just as with classic modules).

- you don't "instantiate" an ES module. You just import it to use its single instance (there's only one instance ever created, at first import in your program, and all other imports receive a reference to that same single instance)

- If your module needs to support multiple instantiations, you have to provide a classic module-style factory function on your ESM definition for that purpose.

🔗 More on modules: [Unbundling the JavaScript module bundler by Luciano Mammino](https://www.youtube.com/watch?v=WGlT921ixx4)
