---
path: "/you-dont-know-js-scope-closure-01"
date: "2021-05-25"
title: "You Don't Know JS: Book 2 (Scope and Closure) - 01 What's the Scope?"
tags:
  - javascript
  - ydkjs2
description: "My notes from Kyle Simpson's (aka getify's) 2nd book, spoiler alert: twas difficult 😅"
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md)

**Answering the following two questions:**

- how does JS know which variables are accessible by any given statement
- how does it handle two variables of the same name?

**But also:**

- how does the JS engine process our program before it runs?

## Compiled vs. Interpreted

- Code **compilation** is a set of steps that process the text of your code and turn it into a list of instructions the computer can understand.
- Typically, the whole source code is transformed at once and saved in an executable output (file).
- With **interpretation**, the source code is transformed line by line; each line or statement is executed before immediately proceeding to process the next line of the source code.
- Modern JS engines employ numerous variations of both compilation and interpretation in the handling of JS programs.

## Compiling Code

In classic compiler theory, a program is processed by a compiler in three basic stages:

1. **tokenizing/lexing**: breaking up a string of characters into meaningful chunks, called tokens

2. **parsing**: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program (aka Abstract Syntax Tree or AST)

3. **code generation**: taking an AST and turning it into executable code.

**🤔 Oi, but what is the difference between tokenizing and lexing?**

- The difference lies in whether the tokens are identified in a stateless or stateful way. 😅 (this answer needs work)

## Required: Two Phases

- (at least) two phases of **parsing/compilation** first, then **execution**.
- The parsing behavior is observed in syntax errors and hoisting.

### Syntax errors

JS engine first parsing the entires program before any of it is executed and throws syntax errors if something isn't right.

### Hoisting

```js
function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi"; // because let lands you in the TDZ
        console.log(greeting);
    }
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization
```

Now for the compilation bit: it makes sense that once JS is converted into AST (previous step), it is then compiled into its most efficient (binary) representation for the engine to execute.

## Compiler Speak

- Other than declarations, all occurrences of variables/identifiers in a program serve in one of two "roles": either they're the target of an assignment or they're the source of a value.
- Rule of thumb: is a value being assigned to a `variable ? target : source`

### Targets

```js
students = []; // students

for (let student of students) { // student

getStudentName(studentId) // studentId

function getStudentName(studentID) { // getStudentName
```

### Sources

```js
for (let student of students) { // students

if (student.id == studentID) // both student and studentID

return student.name;

getStudentName(73) // getStudentName
console.log(nextStudent) // both console and nextStudent

```

## Lexical Scope

- Previously 🍿: **lexical scope** means determining the scope during (the lexing state) compile-time.
- The key idea of "lexical scope" is that it's controlled entirely by the placement of functions, blocks, and variable declarations, in relation to one another.
- Also! 💡 if a variable is block-scope declared (`let` and `const`), then it's associated with the nearest enclosing `{ .. }` block, rather than its enclosing function (as with `var`).
- if a variable is not declared in the current scope, the next outer/enclosing scope will be consulted (until you reach `global` or find nothing - aka `undeclared`).
- Memory doesn't get allocated until the code is executed.
- During compilation, two things happen:
  1. scopes (lexical environments) get defined,
  2. identifiers (variables) are registered.
