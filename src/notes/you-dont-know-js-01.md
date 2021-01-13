---
path: "/you-dont-know-js-01"
date: "2021-01-13"
title: "You Don't Know JS - 01 Get Started"
tags:
  - javascript
  - ydkjs
description: "Background, history, naming, future & past JS, JS gaps and more."
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md)

## The Pillars of JS

- scope/closures
- prototypes/objects
- and types/coercion

## The Name

**🤔 What is the difference between a script and a program?**

- all scripting languages are programming languages
- the main difference is that a script is interpreted (does not need to be compiled), while a program is compiled

Also:

- "A **script** is code that acts upon some system in an external or independent manner and can be removed or disabled without disabling the system itself (aka "lightweight" programming)."
- "A **program** is code that constitutes a system. The program's code may be written in a modular manner, with good separation of concerns, but the code is fundamentally internal to, and a dependency of, the system itself."

### But, more specifically

- The JavaScript/JS that runs in your browser or in `Node.js`, is an implementation of the [ES2019](https://www.ecma-international.org/ecma-262/10.0) standard.

- **TC39** is the technical steering committee that manages JS. Their primary task is managing the official specification for the language. They meet regularly to vote on any agreed changes, which they then submit to **ECMA**, the standards organization.

- All proposals are managed in the open, on [TC39's Github](https://github.com/tc39/proposals) repository.

## Browser JS vs Other implementations

- For the most part, the JS defined in the specification and the JS that runs in browser-based JS engines is the same. But there are some differences that must be considered.

- Sometimes the JS engines will refuse to conform to a specification-dictated change because it would break that web content.

- In these cases, often TC39 will backtrack and simply choose to conform the specification to the reality of the web.

- Various JS environments (like browser JS engines, `Node.js`, etc.) add APIs into the global scope of your JS programs that give you environment-specific capabilities, like being able to pop an alert-style box in the user's browser.

- So `alert(..)` and `console.log(..)` are not defined by JS. They are functions and object methods, and they obey JS syntax rules. The behaviors behind them are controlled by the environment running the JS engine, but on the surface, they definitely have to abide by JS to be able to play in the JS playground.

- The developer console is not trying to pretend to be a JS compiler that handles your entered code exactly the same way the JS engine handles a `.js` file.

**🤔 What is a Browser API?**

- A construct built into the browser that sits on top of the JavaScript language and allows you to implement functionality more easily.

## Programming paradigms

**🤔 What is a (programming) paradigm?**

- A mindset and approach to structuring code
- Typical paradigm-level code categories include:

  - **procedural** (C): Procedural style organizes code in a top-down, linear progression through a pre-determined set of operations, usually collected together in related units called procedures.
  - **object-oriented** aka OO/classes (Java/C++): OO-style organizes code by collecting logic and data together into units called classes.
  - **functional** aka FP (Haskell): FP style organizes code into functions (pure computations as opposed to procedures), and the adaptations of those functions as values.

- Multiparadigm languages (like JavaScript) can mix and match from different paradigms.

## Future and Past JS

**🤔 What is backwards compatibility?**

Backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid.

**🤔 What is forwards compatibility?**
means that including a new addition to the language in a program would not cause that program to break if it were run in an older JS engine (JS is not).

HTML and CSS, by contrast, are forwards-compatible but not backwards-compatible.

## JS Gaps

- Developers should focus on writing the clean, new syntax forms, and let the tools take care of producing a forwards-compatible version of that code that is suitable to deploy and run on the oldest-supported JS engine environments.

**🤔 What is transpiling?**
It' using a tool to convert the source code of a program from one form to another (but still as textual source code). Typically, forwards-compatibility problems related to syntax are solved by using a transpiler (e.g. Babel) to convert from that newer JS syntax version to an equivalent older syntax.

**🤔 What is a polyfill? (aka Shim?)**

If the forwards-compatibility issue is not related to new syntax, but rather to a missing API method that was only recently added, the most common solution is to provide a definition for that missing API method that stands in and acts as if the older environment had already had it natively defined.

## Intepretation

- Scripting and interpreted languages have historically been looked down because of lack of performance optimization, as well as dislike of certain language characteristics, such as scripting languages generally using dynamic typing instead of the "more mature" statically typed languages.

- Languages regarded as "compiled" usually produce a portable (binary) representation of the program that is distributed for execution later (which potentially disqualified JS).

- Historically, scripted or interpreted languages were executed in generally a top-down and line-by-line fashion.

- Compiled languages go through: Parsing + Compilation + Execution

- All compiled languages are parsed.

- Translation from the parsed form of the program to its executable form is usually called an Abstract Syntax Tree (AST).

- JS source code is parsed before it is executed (it throws static errors, before it's executed).

- The parsed JS is converted to an optimized (binary) form, and that "code" is subsequently executed.

**🤔 What is compilation?**

- It's the process of adding another step between the parsing and the running of a program, which transforms the program into something that can be evaluated more efficiently by doing as much work as possible in advance.
- Traditionally, compilation involves converting the program to machine code, the raw format that a computer's process can execute. But any process that converts a program to a different representation can be though of as compilation.

**🤔 What is Just in Time Compilation?**

- Just-in-time compilation is a method for improving the performance of interpreted programs. During execution, the program may be compiled into native code to improve its performance. It is also known as dynamic compilation.

**🤔 What happens during compilation?**

- **Lexer** - break the program up into words.
- **Parser** - check that the syntax of the sentences are correct.
- **Semantic Analysis** - check that the sentences make sense.
- **Optimizer** - edit the sentences for brevity.
- **Code generator** - output something with equivalent semantic meaning using another vocabulary.

## Web assembly (WASM)

- Is the ability to run non-JS programs inside the JS engine (which brings performance improvements).
- WASM is a representation format more akin to Assembly (hence, its name) that can be processed by a JS engine by skipping the parsing/compilation that the JS engine normally does. The parsing/compilation of a WASM-targeted program happen ahead of time (AOT); what's distributed is a binary-packed program ready for the JS engine to execute with very minimal processing.
