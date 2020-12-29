---
path: "/opinionated-react-02"
date: "2020-11-16"
title: "The Opinionated Guide to React 02 - On state management"
tags:
  - opinionated-react
  - reactjs
description: "On useState, Context and others"
---

## useState

- for handling local state (on a component level)

## Global state with Context

- for many use cases where you need state spread around your application (but the state is not too complex)

- `Context`: provides us with two components: a `Provider` and a `Consumer`.
- `Provider`: holds the values
- `Consumer`: reads the values (via `useContext` hook)

🕵️‍♀️ Example:

```javascript
import React, { useContext } from "react";

const Person = {
  name: "Sara",
  city: "Berlin",
  nationality: "Portugal",
};

const PersonContext = React.createContext();

const Header = () => {
  const person = useContext(PersonContext);
  return <p>Hello {person.name}</p>;
};

const Main = () => {
  const person = useContext(PersonContext);
  return (
    <p>
      I see with you are from {person.nationality} and live in {person.city}
    </p>
  );
};

const App = () => {
  return (
    <PersonContext.Provider value={Person}>
      <>
        <Header />
        <Main />
      </>
    </PersonContext.Provider>
  );
};

export default App;
```

## State Management Library

To be discussed later in a separate chapter
