---
path: "/you-dont-know-js-scope-closure-04"
date: "2021-06-14"
title: "You Don't Know JS: Book 2 (Scope and Closure) - 04 Around the Global Scope"
tags:
  - javascript
  - ydkjs2
description: "JavaScript global scope and built-ins in different environments (browser, engine, dev tools, node)."
---

- 📕 [GitHub Link](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch4.md)

## Global scope

The global scope is an important glue in practically every JS application.

In modern browsers, multiple JS files are stitched together using one of the three following ways:

### 1. ES modules

- files are loaded individually by the JS environment
- each module then imports references to whichever other modules it needs
- The relations between modules are called *dependencies*. When a module needs a piece from another module, it is said to depend on that module.
- i.e., Modules are expected to `export` what they want to be accessible from outside and `import` what they need.
- files only cooperate through shared imports; no need for shared outer scope

### 2. Using a bundler (like web pack)

- files are typically concatenated together into one big file before delivery to the browser and JS engine

- additional mechanism needed for resolving namespaces via a wrapper function

  ```js
  // this establishes an application-wide scope
  // a stand-in for the global scope
  (function wrappingOuterScope(){
      var moduleOne = (function one(){
          // ..
      })();

      var moduleTwo = (function two(){
          // ..

          function callModuleOne() {
              moduleOne.someMethod();
          }

          // ..
      })();
  })();
  ```

**🤔 But, what do build tools actually do?**

1. Take a “main” module, the one intended to be put in `<script type="module">` in HTML.
2. Analyze its dependencies: imports as well as imports of imports etc.
3. Build a single file with all modules (or multiple files, that’s tunable), replacing native `import` calls with bundler functions, so that it works. _Special_ module types like HTML/CSS modules are also supported.
4. In the process, other transformations and optimizations may be applied:
   - Unreachable code removed.
   - Unused exports removed (aka tree-shaking).
   - Development-specific statements like `console` and `debugger` removed.
   - Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using [Babel](https://babeljs.io/).
   - The resulting file is minified (spaces removed, variables replaced with shorter names, etc).

### 3. Via global scope

```js
// the modules are dropped onto the global scope
// this is same as loading files separately
var moduleOne = (function one(){
    // ..
})();
var moduleTwo = (function two(){
    // ..

    function callModuleOne() {
        moduleOne.someMethod();
    }

    // ..
})();
```

## Built-ins (that live in global)

### 1. JS built-ins

- primitives: `undefined`, `null`, `Infinity`, `NaN`
- natives: `Date()`, `Object()`, `String()`, etc.
- global functions: `eval()`, `parseInt()`, etc.
- namespaces: `Math`, `Atomics`, `JSON`
- friends of JS: `Intl`, `WebAssembly`

#### 2. JS-engine built-ins

- `console` (and its methods)
- the DOM (`window`, `document`, etc)
- timers (`setTimeout(..)`, etc)
- web platform APIs: `navigator`, `history`, geolocation, WebRTC, etc.

**🤔 And what about Node?**

Node also exposes several elements "globally," but they're technically not in the `global` scope: `require()`, `__dirname`, `module`, `URL`, and so on.

## But where does it live? 🏠

- it's not as simple as saying: the outermost portion of a file
- different JS environments handle the scopes differently

#### Browser Window

```js
// In a browser, global functions and variables
// declared with var (not let/const!) become
// the property of the global object
var studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!
// The variables will be loaded as properties on
// the `window` object (so you can do `window.hello()`)
```

the code may be loaded via:

- inline `<script>` tag
- `<script src=..>` tag in the markup
- dynamically created `<script>`

❗ Using global variables is generally discouraged. There should be as few global variables as possible.

🤔 We use the global object to test for support of modern language features.

```javascript
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

##### Global Shadowing Globals

```js
window.something = 42;
// let declaration adds a something global variable but not a global object property
// something lexical identifier shadows the something global object property
// avoid this confusion by using var for globals (and let and const for block scopes)
let something = "Kyle";

console.log(something);
// Kyle

console.log(window.something);
// 42
```

To make our code future-proof and easier to understand, we should access properties of the global object directly, as `window.x`

##### DOM Globals

🤯 a DOM element with an `id` attribute automatically creates a global variable that references it.

```js
<ul id="my-todo-list">
   <li id="first">Write a book</li>
   ..
</ul>

first;
// <li id="first">..</li>

window["my-todo-list"];
// <ul id="my-todo-list">..</ul>
```

##### What's in a (Window) Name?

```js
var name = 42;

//  because name is actually a pre-defined getter/setter on the window object,
// which insists on its value being a string value
console.log(name, typeof name);
// "42" string
```

#### Web Workers

Web Workers are a web platform extension on top of browser-JS behavior,  which allows a JS file to run in a completely separate thread (operating system-wise) from the thread that's running the main JS program.

 It does not share the global scope with the main JS program.

In a Web Worker, the global object reference is typically made using `self`.

```js
var studentName = "Kyle";
let studentID = 42;

function hello() {
    console.log(`Hello, ${ self.studentName }!`);
}

self.hello();
// Hello, Kyle!

self.studentID;
// undefined
```

### Developer Tools Console/REPL

There are differences in:

- The behavior of the global scope
- Hoisting
- Block-scoping declarators (`let` / `const` ) when used in the outermost scope

### ES Modules (ESM)

```js
// variables declared inside a module, are not trully global
// they are module-global
var studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

export hello;
```

### Node

- node treats every single `.js` file as a module (either ES module or CommonJS)
- which means that the top level of your Node programs is never actually the global scope

```js
// the var and function declarations are contained in that wrapping function's scope,
// and are not treated as global variables
var studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

module.exports.hello = hello;
```

- The only way to add properties to the global environment is to use the `global` object.
- `global` is a reference to the real global scope object, somewhat like using `window` in a browser JS environment.

```js
global.studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

module.exports.hello = hello;
```

## Global this

- As of ES2020, JS has finally defined a standardized reference to the global scope object, called `globalThis`that should be supported across all environments. It’s supported in all major browsers.

## Other links

- [JavaScript Info: Intro to modules](https://javascript.info/modules-intro)
- [JavaScript Info: Global Object](https://javascript.info/global-object)
