---
path: "/nunjucks"
date: "2020-06-23"
title: "So... nunjucks?"
tags: ["nunjucks", "11ty"]
description: "Nunjucks was made by Mozilla ❤️"
link: "https://mozilla.github.io/nunjucks/templating.html"
---

## What is Nunjucks?

A templating language is like a preprocessor for HTML (what SASS is to CSS) 👍.

Template engines are tools that help us break HTML code into smaller pieces that we can reuse across multiple HTML files.

They also give you the power to feed data into variables that help you simplify your code ([from](https://zellwk.com/blog/nunjucks-with-gulp/)).

Why use it?

- It lets you break HTML code into smaller files
- It lets you use data to populate your markup (DRY code baby)
- I'm learning 11ty, where Nunjucks is the preferred templating language.

## File extension

Can be `.njk` but also just `.html`.

## Variables

This is how you write variables:

- `{{ username }}` also `{{ username.name }}`

You can also do `if` and `for` and other stuff (just like in JavaScript).

## Filters

Filters are functions (note the `|` ). Filters can be builtin or made by you.

Some built-in filters:

- capitalize
- lower
- random
- replace
- reverse
- safe
- trim
- urlize (Convert URLs in plain text into clickable links:)

## Template inheritance

Template inheritance is where nunjucks really shines!

### Includes

include pulls in other templates in place (especially partials)

- filenames that begin with \_ are not built so they are ideal for partials.

### Extends

- extends allow you to define a template document with “blocks” inside of it that are meant to take chunks of content.

- this allows us to define a base template, and then override parts of it within the child template. This is known as template inheritance.

## Macros (import)

- macros are imports with parameters - a.k.a. functions!

## Whitespace

- You can tell the engine to strip all leading or trailing whitespace by adding a minus sign (-) to the start or end block or a variable.

## Autoescaping

- If autoescaping is turned on in the environment, all output will automatically be escaped for safe output. To manually mark the output as safe, use the safe filter. Nunjucks will not escape this output.
