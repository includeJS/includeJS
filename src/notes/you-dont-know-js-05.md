---
path: "/you-dont-know-js-05"
date: "2021-03-06"
title: "You Don't Know JS - 05 Exploring Further"
tags:
  - javascript
  - ydkjs
description: "On values vs references, function forms, coercive comparison and prototypal classes. 🤯"
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md)

## Values vs. References

- In many languages, the developer can choose between assigning/passing a value as the value itself, or as a reference to the value. In JS, however, this decision is entirely determined by **the kind of value**.
- primitive values are always assigned/passed as value copies
- with references two or more variables are pointing at the same value and modifying this shared value would be reflected by an access via any of those references
- In JS, only object values (arrays, objects, functions, etc.) are treated as references.

## Function (forms)

- arrow function expressions are syntactically anonymous
- But! anonymous functions might get a name inference when the function expression is assigned with `=`

```js
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
};

awesomeFunction.name;
// "awesomeFunction"
```

- If you pass a function expression as an argument to a function call (more common), no name inference occurs. In this case, the name property will be an empty string, and the developer console will usually report `anonymous function`.
- Even if a name is inferred, it's still an anonymous function because the inferred name is a metadata string value, not an available identifier to refer to the function.

You can also have a named function expression:

```js
var awesomeFunction = function someName(coolThings) {
    // ..
    return amazingStuff;
};

awesomeFunction.name;
// "someName"
```

- someName is associated with the function at compile-time, and the association with the identifier `awesomeFunction` doesn't happen until runtime.

### More declaration forms

```js
// generator function declaration
function *two() { .. }

// async function declaration
async function three() { .. }

// async generator function declaration
async function *four() { .. }

// named function export declaration (ES6 modules)
export function five() { .. }
```

### More function expression forms

```js
// IIFE
(function(){ .. })();
(function namedIIFE(){ .. })();

// asynchronous IIFE
(async function(){ .. })();
(async function namedAIIFE(){ .. })();

// arrow function expressions
var f;
f = () => 42;
f = x => x * 2;
f = (x) => x * 2;
f = (x,y) => x * y;
f = x => ({ x: x * 2 });
f = x => { return x * 2; };
f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};
someOperation( x => x * 2 );
//
```

### Functions as methods

```js
class SomethingKindaGreat {
    // class methods
    coolMethod() { .. }   // no commas!
    boringMethod() { .. }
}

var EntirelyDifferent = {
    // object methods
    coolMethod() { .. },   // commas!
    boringMethod() { .. },

    // (anonymous) function expression property
    oldSchool: function() { .. }
};
```

## Coercive Conditional Comparison

Since the `Boolean(..)` function always returns a value of type boolean, the `==` vs `===` in this snippet is irrelevant; they'll both do the same thing.

```js
var x = "hello";

if (Boolean(x) == true) {
    // will run
}

// which is the same as:

if (Boolean(x) === true) {
    // will run
}
```

## Prototypal Classes

A prototypal class with `Object.create(..)`

```js
var Classroom = {
    welcome() {
        console.log("Welcome, students!");
    }
};

var mathClass = Object.create(Classroom);

mathClass.welcome();
// Welcome, students!
```

- All functions by default reference an empty object at a property named `prototype`.
- This is not the function's prototype (where the function is prototype linked to), but rather the prototype object to link to when other objects are created by calling the function with `new`.

- So you could do this instead:

```js
function Classroom() {
    // ..
}

Classroom.prototype.welcome = function hello() {
    console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!
```

- The "prototypal class" pattern is now strongly discouraged, in favor of using **ES6's class mechanism**:

```js
class Classroom {
    constructor() {
        // ..
    }

    welcome() {
        console.log("Welcome, students!");
    }
}

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!
```

- Under the covers, the same prototype linkage is wired up, but this class syntax fits the class-oriented design pattern much more cleanly than "prototypal classes".
