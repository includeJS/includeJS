---
path: "/opinionated-react-01"
date: "2020-11-09"
title: "Opinionated React - Folder Structure, File Naming, Eslint, Typescript"
tags:
  - opinionated-react
  - reactjs
description: "On how to setup reactJS projects, when to use Typescript."
---

**Legend:**

- ✏️ means the author
- 👩‍💻 means moi

# Folder/ File Structuring

## Folder Structure

✏️ Four main folders (inside `src`):

- `components`
- `pages`
- `assets`
- `utils`

For state management

- `context`

👩‍💻 Compared to how we have it set up at work:

- `components` ✅ (`Button` also lives here)
- `pages` ✅ (we straight up call them `screens`)
- `utils`

We don't have a separate assets folder. 🤔

But we have (in addition):

- `modules` for state management (`Redux` and `hooks`)
- `API` for talking to the backend
- `legacy` shame 😊

😱 What is Overmind? (to be revealed in a future chapter)

## File naming

✏️ "I always try to name my files `index.js` and let the folder name do the talking."

👩‍💻 (I currently give each file a specific name.)

But, but, what happens when you're searching?

## Exporting components

✏️

```
const LandingPage = () => {}
export default LandingPage
```

👩‍💻

```
export default function LandingPage () {}
```

## eslint

- `eslint-config-react-app`

😱 But to add to a project (outisde of `create-react-app`):

`npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8`

## Typescript (when to use it?)

- Plug it in when you need it
- Never at the beginning unless you know the app you are building will have the need for a complicated state.
- Design systems are things where TypeScript is quite handy
- For a complex app

🤔 **Besides typesettings, what else does TypeScript give you?**

- [Answer](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)

🤔 **Proptypes vs typescript?**

- Typescript and PropTypes serve different purposes. Typescript validates types at compile-time, whereas PropTypes are checked at runtime.

- Typescript is useful when you are writing code: it will warn you if you pass an argument of the wrong type to your React components, give you autocomplete for function calls, etc.

- PropTypes are useful when you test how the components interact with external data.

🤔 **Compile-time vs runtime?**

- Source code (if written in a high-level programming language) must be compiled into machine code to be an executable program. The operations at compile time include syntax analysis, semantic analysis, and code generation. During compilation, errors can occur. They occur due to syntax and semantic errors.

- The runtime is also known as execution time. It is the time when a program is running in contrast to other program lifecycle phases such as compile-time, load time, etc.

- When the compilation process is completed, it is run by the user. The time period to run the executable generated at compile time is referred to as runtime. Runtime errors are known as exceptions.
