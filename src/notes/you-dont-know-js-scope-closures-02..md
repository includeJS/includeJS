---
path: "/you-dont-know-js-scope-closure-02"
date: "2021-05-25"
title: "You Don't Know JS: Book 2 (Scope and Closure) - 02 Illustrating Lexical Scope"
tags:
  - javascript
  - ydkjs2
description: "On how the Engine + Compiler + Scope Manager are the bestest of friends."
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md)

## Illustrating Lexical Scope

💡 **Quick reminder**

The term "lexical" refers to the first stage of compilation (lexing/parsing).

- **Scopes**  are determined during compilation based on where the functions/blocks of scope are written, the nesting inside each other, and so on.

- Each **scope bubble**  is entirely contained within its parent scope bubble—a scope is never partially in two different outer scopes.

- **References** (non-declarations) to variables/identifiers are allowed if there's a matching declaration either in the current scope or any scope above/outside the current scope, but not with declarations from lower/nested scopes.

## JS engine

- **Engine**: responsible for start-to-finish compilation and execution of our JavaScript program.

- **Compiler**: one of Engine's friends; handles all the dirty work of parsing and code-generation.

- **Scope Manager**: another friend of Engine; collects and maintains a lookup list of all the declared variables/identifiers and enforces a set of rules as to how these are accessible to currently executing code.

### Compiler steps in details

1. The first thing Compiler will do with this program is perform **lexing** to break it down into tokens, which it will then parse into a tree (AST).

2a. (featuring Compiler & Scope Manager) on encountering **a variable declaration**, the first step is checking with the Scope manager if the variable already exists; if so, do nothing; if not, stick a pin and, at execution time, ask the scope manager to create a new variable

2b. (featuring Engine & Scope Manager) **compiles** the code for the Engine to execute, the engine will check with the scope manager for where it can find the variable and initialize it (+ declare value, execute)

The compiler also signals when it runs across functions or block scopes so that a new scope bucket and Scope Manager can be instantiated.

## Nested Scope

- Scopes can be lexically nested to any arbitrary depth as the program defines.
- **Each scope gets its own Scope Manager instance each time that scope is executed** (one or more times).
- **Each scope automatically has all its identifiers registered at the start of the scope being executed** (`var` is declared value `undefined` but not `const`/`let`)
- At the beginning of a scope, if any identifier came from a function declaration, that variable is automatically initialized to its associated function reference
- One of the key aspects of lexical scope is that any time an identifier reference cannot be found in the current scope, the next outer scope in the nesting is consulted; that process is repeated until an answer is found or there are no more scopes to consult.

## Lookup failures

What happens if we can't resolve an identifier?

- for source lookup, we get a `ReferenceError` (not defined, but not `undefined` - which is a variable that has previously been declared but otherwise has no value)

😵 This is confusing:

```js
var studentName;
typeof studentName;     // "undefined" - makes sense

typeof doesntExist;     // "undefined" - doesn't make sense, should be `not defined`
```

If `strict-mode` is disabled you can get an **accidental global variable**

```js
function getStudentName() {
    // assignment to an undeclared variable :(
    nextStudent = "Suzy";
}

getStudentName();

console.log(nextStudent);
// "Suzy" -- oops, an accidental-global variable!
```
