---
path: "/missing-semester-08"
date: "2020-10-24"
title: "Missing Semester 08 - Metaprogramming"
tags:
  - missing-semester
  - bash
description: "Metaprogramming is processes that surround the work that you do when working with software: how your system is built, how it's tested and how you add dependencies to it. "
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=_Ms1Z4xfqv4&feature=emb_logo)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/metaprogramming/)

## Build systems

- Build system: a tool that can help you with the build process (like npm)
- Build process: some sequence of operations you need to do to go from your inputs to your outputs.

### make

The **make** utility requires a `Makefile` which defines a set of tasks to be executed. 

You may have used make to compile a program from source code. 

Most open-source projects use `make` to compile a final executable binary, which can then be installed using `make install`.

Create a `makefile`:

```
say_hello:
        echo "Hello World"
```

And then run it:

```
$ make
echo "Hello World"
Hello World
```

Tabs are important!

```
target: prerequisites
<TAB> recipe
```

## Semantic versioning

With semantic versioning, every version number is of the form: **major.minor.patch**:

- If a new release does not change the API, increase the **patch** version. (security fixes)
- If you add to your API in a backward-compatible way, increase the **minor** version.
- If you change the API in a non-backward-compatible way, increase the **major** version.

## Lock files 

- **Lock file**: a file that lists the exact version you currently depen on for each dependency.

- **Vendoring** - a.k.a. dependency locking: when you copy all the code of your dependencies into your own project. 

 ## Continuous integration (CI)

Continuous integration, or CI, is an umbrella term for “stuff that runs whenever your code changes” - a.k.a. event-triggered actions. E.g CIs: Travis CI, Azure Pipelines, and GitHub Actions.

They all work in roughly the same way: you add a file to your repository that describes what should happen when various things happen to that repository (e.g. re-run the tests when there are code changes. 

Dependabot: checks whether your dependencies are up-to-date and submits an automatic PR if they're not.

The badges in GitHub come from the CI as well: e.g test coverage, dependencies, documentaton versioning.

GitHub pages is a type of a CI action - it builds a blog from your markdown files (using Jeykll).

## Testing

- **Test suite**: all of the tests in the program
- **Unit test**: tests a single feature
- **Integration test**: test the interaction between different subsystems of the program
- **Regression test**: tests things that were broken in the past. They prevent your projects from regressing to earlier bugs.
- **Mocking**: being able to replace the parts of your system with a dummy version of itself.