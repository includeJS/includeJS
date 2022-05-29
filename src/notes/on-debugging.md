---
path: "/on-debugging"
date: "2022-05-20"
title: "On debugging"
tags:
  - cs
  - design
  - code-complete
description: "Not all programmers (even if they are good) are good at debugging."
---

One of my favorite chapters from [Code Complete](https://en.wikipedia.org/wiki/Code_Complete) was on debugging. Why? Because it's something I want to get better at.

I feel that currently, my biggest issue with debugging is scoping. While working on a specific bug, I sometimes find other (unrelated!) issues, and so I also fix those - since I'm in the area, you know! This results in a muddier chunk of work submitted, not to mention that I sometimes introduce new bugs 🤦‍♀️.

Below are my notes from chapter 23:

## On debugging

- debugging is the process of identifying the root cause of an error and correcting it
- the best way to build a quality product is to develop requirements carefully, design well, and use high-quality coding practices. Debugging is a last resort.
- debugging is a great learning opportunity
- finding the defect and understanding it is usually 90% of the work
- avoid the trial-and-error, superstitious approach to debugging
- a systematic approach to finding and fixing errors is critical to success
- not all programmers (even if they are good) are good at debugging

### Debugging steps

1. stabilize the error: if the bug doesn't occur reliably, it's impossible to diagnose; narrow the test case to the simplest one that still produces errors
2. locate the source of the error: brute-force debugging (a big gesture that takes time but guarantees the fix: scrapping all new code, performing a full-on code review)
3. fix the defect: understand the problem before fixing it; hurrying to solve a problem is one of the most time-ineffective things you can do; make one change at a time (👈 That's me)
4. test the fix
5. look for similar errors

### Psychological considerations in debugging

- people expect a new phenomenon to resemble similar phenomena they've seen before
- programmers who debug most effectively mentally slice away parts of the program that aren't relevant
- psychological distance: the ease with which two items can be differentiated (stay away from similar variable names)
