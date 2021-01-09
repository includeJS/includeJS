---
path: "/opinionated-react-06"
date: "2020-12-14"
title: "The Opinionated Guide to Reactt 06 - React Hooks"
tags:
  - opinionated-react
  - reactjs
description: "On useEffect, useLayoutEffect, useState, useContext, useReducer, useRefo, useCallback and useMemo"
---

## Rules of Hooks

- Hooks start with "use".
- Only call hooks at the top level: don't call hooks inside loops, conditions, or nested functions.
- Only call hooks from React functions: don't call hooks from regular JavaScript functions

### useEffect

- replaces the lifecycle methods
- `useEffect` will always render on mount unless told otherwise because all props get changed on mount
- it can be used in two different aspects, one on start and one when a specific state value changes.
- if you pass an empty array as a dependency, this effect will only run once (you can also pass a static value - like a const - and the result would be the same)
- if you don't pass any dependencies, this hook will run on every re-render
- To clean up the effect, you can pass a function that will be called after the effect runs
- Effects that don't require cleanup: Network requests, manual DOM mutations, and logging
- async code and useEffect

🤔 **What is a Race Condition Bug?**

- A race condition can happen when there are two asynchronous processes that will both be updating the same value.

- Effect callbacks are synchronous to prevent race conditions, so you can not make it async but can call async functions from it by appending a then to it

- This is kosher:

```
useEffect(() => {
  getCharacter(openId).then((rsp) => setInfo(rsp));
}, [openId]);
```

- And to cleanup an `async` function (cancel a promise):

```
function BananaComponent() {
  const [bananas, setBananas] = useState([])
  useEffect(() => {
    let isSubscribed = true
    fetchBananas().then( bananas => {
      if (isSubscribed) {
        setBananas(bananas)
      }
    })
    return () => isSubscribed = false
  }, []);
```

## useLayoutEffect (vs useEffect)

- `useEffect` runs asynchronously and after a render is painted to the screen.

Meaning:

- You cause a render somehow (change state, or the parent re-renders)
- React renders your component (calls it)
- The screen is visually updated
- THEN useEffect runs

`useLayoutEffect`, on the other hand, runs synchronously after a render but before the screen is updated.

Meaning:

- You cause a render somehow (change state, or the parent re-renders)
- React renders your component (calls it)
- useLayoutEffect runs, and React waits for it to finish.
- The screen is visually updated

- 99% of the time, useEffect.

## useState

- This will only increase the value by one:

```
const increment = () => {
  setCount(counter + 1);
  setCount(counter + 1);
  setCount(counter + 1);
};
```

- Reason: React will batch them up, figure out the result, and then efficiently make that change.

- When dealing with updating the state depending on its current value, we should access it like so (this will increment it by three):

```
setCounter((counter) => counter + 1);
setCounter((counter) => counter + 1);
setCounter((counter) => counter + 1);
```

## useContext

- `useContext` lets you subscribe to React context without introducing nesting
- helps you avoid "data tunneling" or "prop drilling."

## useReducer

- `useReducer` lets you manage the local state of complex components with a reducer:
- it takes two parameters
  1. The reducer function - This is where you will update the state (with switches depending on the action you send)
  2. the initial state

```
function reducer(state, action) {
  switch (action.type) {
    case "removeVisited":
      return state;
    case "addVisited":
      return state;
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, {
  airports: airportList,
});
dispatch({ type: "removeVisited", value: airport.id });
```

## useRef

- to be able to access a DOM element and perform imperative actions on it
- it's also a mutable value that can hold anything in it's `current` property

## useMemo vs useCallback

- `useMemo` memoizes a value, useCallback memoizes a function
- `useCallback`: give me the previously created function unless any of the dependencies I send you change
- In other words, `useCallback` gives you referential equality between renders for functions. And `useMemo` gives you referential equality between renders for values.
- `useCallback` returns its function when the dependencies change, while `useMemo` calls its function and returns the result.
- The issue is that in JavaScript, no two functions are equal to each other, so our change gets triggered twice because the first time we call it, the function is re- created and triggering the effect to run again.

```
function foo() {
  return "bar";
}
const memoizedCallback = useCallback(foo, []);
const memoizedResult = useMemo(foo, []);
memoizedCallback;
// ƒ foo() {
//   return 'bar';
// }
memoizedResult; // 'bar'
memoizedCallback(); // 'bar'
memoizedResult(); // 🔴 TypeError
```

- An object (including a function object) is equal only to itself.

- More [resources](https://github.com/FrontendMasters/pure-react-state-management), [and](https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth)
