---
path: "/you-dont-know-js-scope-closure-03"
date: "2021-05-25"
title: "You Don't Know JS: Book 2 (Scope and Closure) - 03 The Scope Chain"
tags:
  - javascript
  - ydkjs2
description: "The scope chain, shadowing, and the different function forms."
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md)

## The Scope Chain

- the connections between scopes that are nested within other scopes
- It determines the path along which variables can be accessed.
- The chain is directed, meaning the lookup moves upward/outward only.
- When a function (declaration or expression) is defined, a new scope is created.

## Lookups

- The information of what scope a variable originates from is usually determined during the initial compilation processing.
- This information is immutable and is likely to be stored with (or at least accessible from) each variable's entry in the AST.
- Avoiding the need for a runtime lookup is a key optimization benefit of lexical scope.

## Shadowing

- when you have two or more variables, each in different scopes, with the same lexical names
- this prevents access to the outer variable from that point inward.

```js
var studentName = "Suzy";

// the parameter is shadowing the (shadowed) global variable.
function printStudent(studentName) {
    studentName = studentName.toUpperCase();
    console.log(studentName);
}

printStudent("Frank");
// FRANK

printStudent(studentName);
// SUZY

console.log(studentName);
// Suzy
```

- Not all combinations of declaration shadowing are allowed. `let` can shadow `var`, but `var` cannot shadow `let`.

### Global Unshadowing Trick

- is accessing the shadowed variable through the global (`window`) object - when declared with `var` or `function`

```js
var studentName = "Suzy";

function printStudent(studentName) {
    console.log(studentName);
    console.log(window.studentName);
}

printStudent("Frank");
// "Frank"
// "Suzy"
```

## Function Name Scope

- function declaration hoists, function expressions (a function definition used as value instead of a standalone declaration), does not

**But what is the difference in the name?**

```js
// a named function expression
var askQuestion = function ofTheTeacher(){
    // ..
};

// ofTheTeacher is declared as an identifier inside the function itself
var askQuestion = function ofTheTeacher() {
    console.log(ofTheTeacher);
};

askQuestion();
// function ofTheTeacher()...

console.log(ofTheTeacher);
// ReferenceError: ofTheTeacher is not defined


// defined as read-only
var askQuestion = function ofTheTeacher() {
    "use strict";
    ofTheTeacher = 42;   // TypeError

    //..
};

askQuestion();
//
```

## Arrow Functions

- Arrow functions are lexically anonymous, meaning they have no directly related identifier that references the function.

```js
// an inferred name
var askQuestion = () => {
    // ..
};

askQuestion.name;   // askQuestion
```
