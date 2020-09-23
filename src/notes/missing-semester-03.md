---
path: "/missing-semester-03"
date: "2020-09-22"
title: "Missing Semester 03 - Editors (Vim)"
tags:
  - missing-semester
description: "Vim's interface is a programming language 🤯."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=a6Q8Na575qc&list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J&index=3)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/editors/)

## Vim Modes

- Normal: for moving around a file and making edits (`Esc`)
- Insert: for inserting text (`i`)
- Replace: for replacing text (`R`)
- Visual (plain `v`, line `V`, or block `ctrl+v`): for selecting blocks of text
- Command-line: for running a command (`:`)

## Some Vim Vocabulary

- **a buffer**: a set of open files (A given buffer may be open in multiple windows, even within the same tab)
- **a session**: A Vim session has a number of tabs, each of which has a number of windows (split panes)
- **a tab**: each tab has a number of windows
- **a window**: a view (each window shows a single buffer)

## Command Mode

- `:q` close the current window
- `:qa` close all windows (quit Vim)
- `:q!` close and discard any changes you've made (force-quit)
- `:w` save
- `:wq` save and quit
- `:help [topic]` open help (`:help :w` opens help for the :w command)
- `:e` [name of file] open file for editing
- `:ls` show open buffers

## Movement (normal mode)

- Basic movement: `hjkl` (left, down, up, right)
- Words: `w` (next word), `b` (beginning of word), `e` (end of word)
- Lines: `0` (beginning of line), `^` (first non-blank character), `$` (end of line)
- Screen: `H` (top of screen), `M` (middle of screen), `L` (bottom of screen)
- Scroll: `Ctrl+u` (up), `Ctrl+d` (down)
- File: `gg` (beginning of file), `G` (end of file)
- Find: `f[character]`, `t[character]`, `F[character]`, `T[character]` (**F**ind and **T**o)
  - find/to forward/backward [character] on the current line
  - , / ; for navigating matches
- `%` (find the corresponding item - brackets, quotation marks etc)
- search: `/[regex]`, `n` / `N` for navigating matches

## Editing (insert mode)

- `o` / `O` insert line below / above
- `d[motion]` delete [motion]
  - e.g. `dw` is delete word, `d$` is delete to end of line, `d0` is delete to beginning of line
  - `dd` deletes the whole line
- `c[motion] change [motion] (similar to delete, but puts you in insert mode)
  - e.g. `cw` is change word
- `x` delete character (equal do `dl`)
- `r`[character] replaces the current character with the one you typed
- `u` to undo, `ctrl+r` to redo
- `y` to copy / “yank”
- `p` to paste
- `~` flips the case of a character (or selection)

## Selection (visual mode)

- do motion action and select everything in between
- in Visual Line mode (`V`) you'll be selecting by lines at the time
- in Visual Block mode (`ctrl+v`) you'll be selecting by rectangular blocks

## Counts

To perform a given action a number of times.

- `3w` move 3 words forward
- `5j` move 5 lines down
- `7dw` delete 7 words

## Modifiers

Particularly useful for changing stuff inside/around brackets, quotes.

- `i`, “inside”, and `a`, “around”.
- `ci(` change the contents inside the current pair of parentheses
- `ci[` change the contents inside the current pair of square brackets
- `da'` delete a single-quoted string, including the surrounding single quotes
