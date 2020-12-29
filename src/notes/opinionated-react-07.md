---
path: "/opinionated-react-07"
date: "2020-12-21"
title: "The Opinionated Guide to React 07 - Performance and Deployment"
tags:
  - opinionated-react
  - reactjs
description: "Performance optimizations, deployment with Netlify and Vercel"
---

## Performance

### Keys

- Add `keys` to (list) elements
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings (like an `id`)
- Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique.
- When children have keys, React uses the key to match children in the original tree with children in the subsequent tree
- Don't use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with the component state.

When can you use `index` (instead of `id`'s):

- the list and items are static–they are not computed and do not change;
- the items in the list have no ids;
- the list is never reordered or filtered.

### React.memo vs lodash memoize

🤔 **What is memoization?**
In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

- It prevents an element from re-rendering if its props have not changed
- `React.memo` only checks for prop changes. If your function component wrapped in `React.memo` has a `useState` or `useContext` Hook in its implementation, it will still re-render when state or context change.
- By default, `React.memo()` does a shallow comparison of props and objects of props.
- You can use the second argument to indicate a custom equality check function

When to use it?

👍 When you expect the functional component to render often and usually with the same props

### Virtualizing longs lists

- only render the part of the list that is visible at the time, and change what is rendered as you scroll and another part becomes visible
- recommended libraries: `react-window`, `react-virtualized`

### Misc

- use small components
- use CSS for showing/hiding components (instead of mounting/unmounting with react)

## Deployment

### Create React App and Gatsby

**Netlify**:

- drag and drop (after running `yarn build`) or import from GitHub (the `build` scripts will be pre-filled)

**Vercel**:

- install the CLI: `yarn global add vercel`
- `vercel login`
- deploy by typing: `vercel`
- Same as with Netlify, you can import a GitHub project (through the dashboard)

### Next

**Netlify**:

- by default, `Next` is a server-side rendered app and Netlify only supports static sites. In other words, Netlify needs an HTML file to be able to host your website.
- run `next export` to build the app
- on Netlify, add the following `build` config: Build Command: `next build && next export`, Publish directory: `out`
- or you can add a script to `package.json`: `"build:static": "next build && next export"`

**Vercel**:

- Next is Vercel's project, so to deploy you just type: `vercel.`
