---
path: "/opinionated-react-03"
date: "2020-11-23"
title: "Opinionated React 03 - ReactJS project starters"
tags:
  - opinionated-react
  - reactjs
description: "On Create React App, Gatsby and Next"
---

# Project starters

## Create React App

🟢 **Pros:**

- maintained by the React team
- the fastest way to get started and have some React code show up on your page
- supports most CSS pre-processors Supports PWA
- easily updatable with new features Support for SVG as React Components

🔴 **Cons:**

- not very extensible because you don't have access to the webpack or even babel config (unless you `eject`)
- Not a lot of flexibility when it comes to changing the way it handles file types
- no Server-Side Rendering (SSR) Support
- no decisions from the React team in terms of app building, so all the router, state management, and other choices will be up to you.

🤔 **What is server-side rendering?**

- Server-side rendering (also called static pre-rendering), also called SSR, is the ability of a JavaScript application to render on the server rather than in the browser.

🤔 **Server-side- vs client-side rendering?**

- SSR means you run javascript on your server and render the app to HTML before sending it to the client. Just like a traditional web server would, except you also send the raw data required to render the page and use that to "hydrate" your application on the client.

- CSR means you forego all that, use whatever for your server, and just let the browser render the page. Since the HTML response body from the server will then be practically nothing but an empty HTML structure with a script tag, crawlers that don't run javascript will have no idea what's going on on your page.

- More [here](https://dev.to/seal125/what-is-server-side-rendering-22ik)

## Next

🟢 **Pros:**

- a shortcut to making server-side rendered (SSR) - supported out of the box - applications in React
- has routing and styling defaults (but you can choose your own)
- the option to change the babel config (`.babelrc`)
- get started with the CLI (`npx create-next-app`) `example/hello-world`
- amazing docs with lessons to follow
- production-grade
- customization options

🔴 **Cons:**

- a steep learning curve, mostly because SSR things are just harder
- harder to leave if Next is not the best tool for your project

- [Notes from the FrontEndMasters course](https://hendrixer.github.io/nextjs-course/)

## Gatsby

🟢 **Pros:**

- you can pull data from anywhere to make static sites
- has a CLI: `npx gatsby new gatsby-site.`
- huge plugins ecosystem
- amazing documentation
- flexibility to tweak Gatsby internals to your needs Export to HTML
- amazing community and team behind it
- focus on performance and accessibility

🔴 **Cons:**

- the steep learning curve for any advanced things
- knowledge of GraphQL required to get started
- not everything can be static
- some errors only show up on build or deploy

🤔 **What are the benefits of static sites?**

- better SEO (the app is pre-rendered HTML, so everything gets read by Google to rank your site better)
- ease of deployment (compared to server-side applications)

🤔 **How do Gatsby and Next compare?**

- "When something is static, I prefer to use Gatsby. When it's server-rendered, I go with Next."
- [More also here](https://swizec.com/blog/gatsby-to-nextjs-pt1-server-side-render-or-server-side-generate)
