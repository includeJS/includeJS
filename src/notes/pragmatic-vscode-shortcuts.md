---
path: "/pragmatic-fluent-vscode"
date: "2020-06-14"
title: "VSCode Keyboard Shorcuts & Achieving Editor Fluency"
tags: ["productivity", "vscode", "keyboard-shortcuts"]
description: "From The Pragmatic Programmer, 20th Anniversary Edition"
link: "https://pragprog.com/titles/tpp20/"
---

Emoji legend

- ✅ already mastered
- 🥊 needs more practice
- 📕 need to be learned
- 🤷‍♀️ not sure if useful

## 1. When editing text, move and make selection by

### Character

- 🥊 `shift + (left/right) arrow`

Select character by character.

### Word

- ✅ `alt + (left/right) arrow`

Navigate word by word.

- 🥊 `alt + shift + (left/right) arrow`

Select word by word.

- 📕 `option + delete`

Remove word by word.

### Line

- ✅ `cmd + (left/right) arrow`

Move to the beginning/end of the line.

- 🥊 `cmd + shift + (left/right) arrow key`

Select/unselect line.

- ✅ `shift (up/down) arrow`

Select line by line.

- 🥊 `cmd + shift + k`

Delete the current line.

- ✅ `cmd + x`

Cut a line.

- 📕 `cmd + shift + enter`

Insert a line above.

- 📕 `cmd + backspace`

Delete a line.

- ✅ `option + (up/down) arrow`

Move a line up or down.

- ✅ `option + shift + (up/down) arrow`

Copy line up or down.

### Paragraph

- 📕 `cmd + l`

Select the current line; keep pressing -l to expand selection downward.

- 📕 `option + shift + (left/right) arrow`

Expand or shrink selection.

### File

- ✅ `cmd + (up/down) arrow`

Go to the top/bottom of a file.

- ✅ `cmd + shift + (up/down) arrow key`

Select/unselect entire file.

- 🥊 `ctrl + tab`

Go to the next opened tab.

- 🥊 `shift cmd + t`

Open a previously closed file.

## 2. When editing code, move by various syntactic units (matching delimiters, functions, modules...)

- ✅ `cmd + shift + \`

Go to the matching opening/closing bracket.

- 📕 `cmd + shift + o`

Navigate by symbols.

## 3. Reindent code following changes

- ✅ `cmd + [` or `cd + ]`

## 4. Comment and uncomment blocks of code with a single command

- ✅ `cmd + /`

## 5. Undo and redo changes

- ✅ `cmd + z` and `cmd + shift + z`

## 6. Split the editor window into multiple panels, and navigate between them

- 🥊 `cmd + \`

Split editor.

- 📕 `cmd + num`

Focus a specific editor window.

## 7. Navigate to a particular line number

- 📕 `ctrl + g`

## 8. Sort selected lines

- 🤷‍♀️ `cmd + shift + p`

(or `F1`) to access the command palette, then run sort lines.

## 9. Search for both strings and regular expressions, and repeat previous searches

- ✅ `cmd +f`

Search in the current document.

- ✅ `cmd + shift + f`

Search in the current workspace.

- 📕 `cmd + shift + h`

Toggle replace mode.

## 10. Temporarily create multiple cursors based on a selection or on a pattern match, and edit the text at each in parallel

- ✅ `cmd + click`

Insert cursor (press `Escape` to remove the temporary cursors).

- ✅ `cmd + d`

Select the next match.

- 📕 `cmd + u`

De-select previous match.

## 11. Display compilation errors in the current project

- ✅ `cmd + .`

To open the quick-fix context menu.

- 📕 `F8`

Go to the next error warning.

## 12. Run the current project's test

- 🤷‍♀️ `cmd + shift + p`

Open the command palette, then run all tests?

## Bonus (added by me)

- 📕 `cmd + k + z`

Enter the zen mode.

- 📕 `cmd +`

Toggle between different VScode workspaces.

- 📕 `cmd + option + s`

Save all tabs.

**I wrote about [VScode Keyboard Shortcuts](https://includejs.dev/vscode-shortcuts) previously.**
