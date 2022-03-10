---
path: "/managing-complexity"
date: "2022-03-10"
title: "Managing complexity is the primary technical goal in software development."
tags:
  - cs
  - design
description: "On managing complexity."
---

Not so long ago, I finished reading [Code Complete](https://en.wikipedia.org/wiki/Code_Complete). One of the key takeaways from the book was: **Managing complexity is the primary technical goal in software development.** 🤯

I've been thinking about this a lot.

Here's what the book says about conquering complexity, along with the rest of my notes from one of my favorite chapters: Chapter 34 Themes in software craftsmanship.

## Conquering Complexity

- dividing a system into subsystems
- designing classes well so that you can ignore their inner workings when using them
- avoiding global data
- avoid deep inheritance
- avoid deeply nested loops
- having thought out approach to error handling
- keeping routines short
- clear variable naming
- minimizing the number of params
- using conventions

## Pick your process

- the programming process significantly affects the final product
- for bigger projects/teams, organizational characteristics make a bigger difference than anyone's individual abilities
- make clear requirements (req errors are more costly than construction errors)
- don't skip the design process
- avoid premature optimization
- write pseudocode

## Write programs for people first, software second

- readability affects: comprehensibility, reviewability, error rate, debugging, modifiability, development time, external quality

## Watch for falling rocks

- rewrite tricky code
- pay attention to buggy code
- any warning sign (repetitious or hard-to-modify code) should cause you to doubt the quality of your program
- more warning signs: difficulties in writing var names, comments or when decomposing
- **be sensitive to indications that your program is hard to understand**

## Iterate, repeatedly, again, and again

- the more you iterate in each development activity, the better the product of that activity will be

## Misc

- rather than latching on to the latest miracle fad, use a mixture of methods. Experiment with the exciting, recent methods, but bank on the old and dependable ones
- be eclectic: willing to try several approaches, knowing that some will fail and some will succeed but not knowing which ones will work until after you try them
- treat the techniques as tools in a toolbox and use your own judgment to select the best tool for the job
- experiment! and be willing to change your beliefs based on the results of the experiment
- **a blanket attempt to avoid mistakes is the biggest mistake of all**
