---
path: "/opinionated-react-04"
date: "2020-11-30"
title: "The Opinionated Guide to React 04 - ReactJS packages Part 1"
tags:
  - opinionated-react
  - reactjs
description: "On React Router, Overmind, Framer motion, Styled components, Formik"
---

## React Router (6)

- `history`: The history library lets you efficiently manage session history anywhere JavaScript runs (it's now a peer dependency)

- `<Route path="/" element={<Home />}/>` == `<Home path="/" />`

- `<Link>` To create links between pages in the same app.

- The `<Switch/>` component has been replaced by `<Routes/>` in version 6.

- React router version 6 replaces the `useHistory()` hook with the `useNavigate()` hook.

- **Params** are placeholders in the URL that begin with a colon, like the `:id` param defined in the route in this example.

- **Nested routing** helps us to render the sub-routes like `users/1`, `users/2`, etc.

- Use `Outlet` to tell the parent that it has to render any of the matching children that it finds.

- `NavLink`: a special type of Link component that knows when it's active and accepts an `activeStyle` or an `activeClassName` that will be activated when you are in the route the link points to.

- [Migrating from v5 to v6](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md)

## Overmind

- it is a mutable state management option

```js
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
```

## Framer motion

- [YouTube tutorial](https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=1)

- To animate an element, you make it a motion element (`motion.h1`, `motion.p`...), then give it an `animate` prop with value as an object.

- Some other properties: `initial`, `transition`, `whileHover`,`exit.`
- Also, `variants`! (for abstracting properties)

## Styled components

- Solve the issue of string interpolation, theming, SSR, and even global styles that are attached to the theme.

- For keeping your presentational components separate from the logic.

- Every styled component will know about the styling from the `ThemeProvider`!

```js
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/styles"; // where we define our styles
<ThemeProvider theme={theme}>
```

- For adding global styles:

```js
export const Style = createGlobalStyle`
  body {
    text-align: center;
    margin: 0;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.font}
} `;
```

- You wrap your element inside a `styled` function (don't forget to add the backticks!)

```js
const Heading = styled.h1`
  display: block;
`;
```

- You can do JS logic:

```js
background: ${({ theme, react }) => (react ?
theme.colors.white : "black")};
```

## Formik

- `import { useFormik } from "formik";`

- We pass our form's `initialValues` and a submission function (`onSubmit`) to the `useFormik()` hook.

- We also get a bunch of helper methods:

  - `handleSubmit`: A submission handler
  - `handleChange`: A change handler to pass to each `<input>`, `<select>`, or `<textarea>`
  - `values`: Our form's current values

- `Formik` keeps track of not only your form's values but also its error messages and validation.

### getFieldProps()

- Given some field-level info, it returns the exact group of `onChange`, `onBlur`, `value`, `checked` for a given field. You can then spread that on an `input`, `select`, or `textarea.`

- from:

```js
<input
  onChange={formik.handleChange}
  value={values.email}
  onBlur={formik.handleBlur}
  type="email"
  id="email"
/>
```

- to:

```js
<input {...getFieldProps("email")} type="email" id="email" />
```

- `Yup` validation library (from the `Joi` family)
