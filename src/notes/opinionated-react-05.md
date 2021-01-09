---
path: "/opinionated-react-05"
date: "2020-12-07"
title: "The Opinionated Guide to React 05 - ReactJS packages Part 2"
tags:
  - opinionated-react
  - reactjs
description: "On Storybook and GraphQL"
---

## Storybook

- Is a tool to document and test your components in isolation.

- 👍 There's a ready-made `create-react-app` storybook integration and a `storybook CLI`.

- Create a `.storybook/main.js` in the root of the project` and a stories file.

- For adding the CRA preset (inside `main.js`):

```
module.exports = {
  addons: ["@storybook/preset-create-react-app"],
  stories: ["../src/**/*.stories.js"],
};
```

- All we need to do for this is to create a file that ends with `stories.js` in one of the components folders, and we will already see something.

e.g.:

```
import React from "react";
import Button from "./";
export default {
  title: "components/Button",
  component: Button,
};
export const basic = () => <Button>Hello Button</Button>;
```

- Storybook comes with a bunch of add-ons:

- `@storybook/theming`

```
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
addons.setConfig({
  theme: themes.dark,
});
```

- `addon-actions`: add-on to trigger actions (`onClick` etc) on our form components, like our buttons.
- `addon-knob`: allows you to interact with your components and change their properties in real-time
- `addon-a11y`: to test the accessibility of our components

- Further links: [Emma Bostian's FrontEnd Masters workshop notes](https://fem-design-systems.netlify.app/)

## GraphQL

- Is a strongly typed query language and runtime for your data
- It gives clients the power to describe exactly what data they want
- It's just a query language (how your query an API)

🤔 **vs. REST API**

- GraphQL only has one URL (endpoint), typically a `POST` request. It does not need a resource URL + verb combo.
- In REST, the shape and size of the data resource is determined by the server. With Graphql, it's determined by the query (request)
- In REST, you have to make multiple API calls to retrieve relational data. With GraphQL, you can start with entry resource and traverse all the connections in one request

```
query {
  totalPets
}
```

- It returns a `JSON` object.

### GraphQL Playground

- hit `ctrl + space` for a list of available queries
- hover over a field and press command - which will link to the schema
- use the Query Variable panel to pass in variables
- you can send tokens through the HTTP Headers panel

- The schema defines:

  - available queries
  - allowed types

- Further links: [Scott Moss' FrontEnd Masters workshop](https://github.com/FrontendMasters/intro-to-graphql)

🤔 **What is apollo?**
It' a bunch of tooling around GraphQL that encapsulates HTTP logic used to interact with a GraphQL API. It doubles as a client-side state management alternative as well (you can use GraphQL for querying local state). Framework independent. Provides extra features if you also use Apollo Server.

🤔 The real power of GraphQL is connecting different data points.

- If you have more than one (unnamed) query - you have to name them.

- **Queries** are used to request specific data from the endpoint.

- **Mutations** are another type of GraphQL operation that are similar to queries, but they are used when you need to change any data on the backend.

- **Fragments** are selection sets that can be used across multiple queries. They allow you to refactor redundant selection sets, and they are essential when querying unions or interface types.

- **Interfaces** are similar to Unions in that they provide a mechanism for dealing with different types of data.

- **Unions** are used when we want a GraphQL field or list to handle multiple types of data.

- A GraphQL API can push new data to the client with the **Subscription** Type.

## Other

- for date: `date-fns`
- for icons: `react-icons`
- UI toolkits:
  - unstyled: `Reakit`
  - styled: `Chakra UI`
