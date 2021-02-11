---
path: "/js-hard-parts"
date: "2021-02-11"
title: "JS - The Hard Parts (Notes)"
tags:
  - javascript
  - fem
description: "My notes from the FrontendMasters course JavaScript: The Hard Parts"
---

- 📺 [FrontendMaster Course Link](https://frontendmasters.com/courses/javascript-hard-parts/)
- 📕 [Slides](https://frontendmasters.com/assets/resources/willsentance/js-the-hard-parts.pdf)

## Principles of JavaScript - Thread, Execution context, and Call stack

**🤔 What is a global execution context?**

- thread of execution (parsing and executing code line after line)
- the live memory of variables with data (Global Variable Environment)

There is one global execution context, but you can have multiple function contexts.

**🤔 What is the JS thread like?**

- single-threaded (one thing at a time)
- with synchronous execution

**🤔 What happens when you execute a function?**

You create a new execution context!

**🤔 What is a call stack?**

It's a special data structure that allows us to track where the thread of execution is (whatever is on top of the call stack) and where to return to after an execution context is popped off the stack.

A stack is a structure where the last thing you put into it is the first thing that you take ou: push/pop).

**🤔 What are some of the core features of functional programming?**

1. Pure functions (no side effects) - the only side effect is the `return` value
2. Higher-order functions (leaving a placeholder for functionality)

## Callbacks and Higher-order functions

**🤔 What do we mean by functions are first-class objects?**

They can co-exist with and can be treated like any other JavaScript objects.

1. assigned to variables and properties of other objects
2. passed as arguments into functions
3. returned as values from functions

But! Unlike objects, functions can be run aka evoked with `()`.

**🤔 What is a higher-order function?**

- it's a function that can take in another function
  OR
- returns a function

**🤔 What is a callback?**

- It's a function that can be passed in as an input.

**🤔 What is an identifier?**

- It's the label for anything you are storing in the computer's memory.

## Closure (aka persistent lexical scope reference)

What follows is a long explanation of what clousures are and how they work (and should they be called closures?):

- When a function gets called, we create a live store of its data (local memory/variable environment/state).
- When the function finishes executing, its local memory is deleted (except for the returned value).

👍 Where you define your functions determines what variables your function have access to when you call the function.

- When a function is defined, it gets (an invisible) `[[scope]]` property that references the Local Memory/Variable Environment in which it has been defined.
- When calling a function, JS will always look first in its immediate local memory (variable environment), and then in the `[[scope]]` property next before it looks any further up

- Our lexical scope (the available live data when our function was defined) is what determines our available variables and prioritization at function execution, not where our function is called.

## Async JavaScript

- Asynchronicity is the backbone of modern web development in JavaScript.

- JavaScript is single-threaded (one command executing at a time) and has an asynchronous execution model (each line is executed in order the code appears).

🤔 But, What if we need to wait sometime before we can execute certain bits of code?
How do we delay some code execution but avoid blocking the thread from any further code running while we wait?

Answer!

- Asynchronous callbacks, Web APIs, the Callback Queue, and Event loop allow us to defer our actions until the 'work' (an API request, timer, etc.) is completed and continue running our code line by line in the meantime.

And so we add three new pieces (original 3: thread of execution, memory/variable environment, call stack):

1. Web Browser APIs/Node background threads (like Timer (setTimeout))
2. Callback/Message queue
3. Event loop

👍 The stuff from the callback queue (meaning coming from the browser API) won't get added to JS's call stack **until** the call stack is empty.

- The second argument of `setTimeout` tells you for how long, at the minimum, you will delay the execution for.

**🤔 What are the rules for executing asynchronously delayed code?**

1. Hold each deferred function in a queue (the Callback Queue) when the API 'completes.'
2. Add the function to the Call stack (i.e., execute the function) ONLY when the call stack is totally empty (Have the Event Loop check this condition).

**🤔 What is an event loop?**
- It's the thing constantly checking whether the call stack is empty - this includes finishing anything happening in the global execution context  - so that you can add the functions from the callback queue to it.

**🤔 When would you use Browser API (to avoid blocking the JS thread)?**

- A timer to finish running
- New information from a server (Ajax)
- Indication that a portion of the page has loaded
- User interaction (clicks, mouseovers, drags)
- Writing/Reading to the File system (Node)
- Writing/reading database (Node)

## OOP JavaScript

**🤔 What are some of the benefits of OOP?**

- easy to add features and functionality
- performant (efficient in terms of memory)
- easy to reason about (clear structure)

**🤔 What are the different ways of declaring an object?**

- writing down the whole object
- initialize an empty object `{}` and add stuff with dot-notation
- using `Object.create()`
- create objects using functions (but with that approach, you are duplicating the methods for every object)

### 2. Using the prototypal nature of JavaScript (`__proto__`)

```
function userCreator(name, score) {
  // we are creating an empty object and assigning it's `__proto__` property to userFunctionStore
  // basically making userFunctionStore the parent object
    let newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
let userFunctionStore = {
    increment: function() {
        this.score++;
    },
    login: function() {
        console.log("You're loggedin");
    }
};

let user1 = userCreator("Will", 3);
user1.increment();
```

### 3 using the keyword `new` (which automates the chaining for us!)

```
let user1 = new userCreator("Will", 3
```

When we call the constructor function with new in front, we automate two things:

1. Create a new user object
2. return the new user object

```
function userCreator(name, score) {
    let newUser = Object.create(functionStore);
    newUser this.name = name;
    newUser this.score = score;
    return newUser;
};
functionStore userCreator.prototype // {};
functionStore userCreator.prototype.increment = function() {
    this.score++;
}
let user1 = new userCreator("Will", 3);
```

🤯 Functions are just objects that can be run (have some extra functionality bits)!

```
// aka a constructor function
function User(name, score) {
  // with new `this` becomes {}
    this.name = name;
    this.score = score;
}
User.prototype.increment = function() {
    this.score++;
};
User.prototype.login = function() {
    console.log("login");
};
let user1 = new User(“Eva”, 9) user1.increment();
// `__proto__` becomes User.prototype
```

### 4. Using the class syntactic sugar

```
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
    login() {
        console.log("login");
    }
}
let user1 = new User("Eva", 9);
user1.increment();
```