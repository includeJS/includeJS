---
path: "/missing-semester-02"
date: "2020-09-20"
title: "Missing Semester 02 - Shell Tools and Scripting"
tags:
  - missing-semester
  - terminal
  - shell
  - bash
description: "More on Shell, scripting, variables, functions, arguments and, most importantly, the tools!"
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=kgII-YWo3Zw)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/shell-tools/)

## Assigning Variables

- `foo=bar`

Declaring a variable.

- `echo $foo`

Accessing a variable.

❗ Spaces are reserved for separating the arguments (`foo = bar` is an invalid declaration).

## Quotes

For literal strings, double or single quotes are equivalent.

But, variables won't expand inside single quotes (but yes in double-quotes)

- `'Value is $foo'` ⛔
- `"Value is $foo"` ✅

## Functions

Function example: (`mcd` - create and `cd` into that folder)

```
mcd () {
  mkdir -p "$1"
  cd "$1"
}
```

- `source [function name]`

Execute commands from a file in the current shell.

- `source path/to/file`

Evaluate the contents of a given file.

## Special Variables

- `$0`

The name of the script we are running.

- `$1`

Access the 1st argument.

- `$#`

The number of arguments we are giving to the command (`length`).

- `%_`

The value of the last argument.

- `!!`

Run the last command again (often used with `sudo`).

- `$?`

Read the value of standard error. (`false` produces `error` code 1).

- `$$`

Process id.

- `$@`

Expands to all the arguments (spread).

- `;`

To concacenate different commands in the same line.

## Short-circuit Operators

- `false || echo "Oops, fail"` (prints Oops, fail)

- `true || echo "Will not be printed"` (prints nothing)

- `true && echo "Things went well"` (prints Things went well)

- `false && echo "Will not be printed"` (prints nothing)

- `true ; echo "This will always run"` (prints This will always run)

- `false ; echo "This will always run"` (prints This will always run)

## Process Substitution

Process substitution feeds the output of a process (or processes) into the stdin of another process.

`cat <(ls) <(ls ..)`

<( CMD ) will execute CMD and place the output in a temporary file and substitute the <() with that file’s name.

## Test

Evaluate condition.

If it is true, returns 0 exit status, otherwise returns 1.

- `test -z \$GIT_BRANCH`

Test if given variable is empty.

- `test -e filename`

Test if file exists.

## Globbing

Globbing or filename expansion: Filename expansion means expanding filename patterns or templates containing special characters.

For example, `example.???` might expand to `example.001` and/or `example.txt`.

- `touch foo{1,2,10}`

- `touch {foo,bar}/{a..j}`

## Shell Functions vs Scripts

- Functions have to be in the same language as the shell, while scripts can be written in any language. This is why including a shebang for scripts is important.

- Functions are loaded once when their definition is read. Scripts are loaded every time they are executed.

- Functions are executed in the current shell environment whereas scripts execute in their own process

## Misc

- `shebang`

The first line in the script that will inform the shell how to run this program.

- `foo=$(pwd)`

Saves the output of the `pwd` command in the foo variable: `echo "We are in $(pwd)`

- `/dev/null`

If you redirect output there, it will be discarded (this is so for tidying up your output)

- `ctrl + r`

Backward search (press ctrl + r again to go through the results)

## Shell Tools

- `brew info [tool]`

👍 To look it up on Homebrew.

- **shellcheck** (For bash script debugging)

- **imageMagick** (Tools and libraries to manipulate images in many formats)

- **ffmpeg** (Play, record, convert, and stream audio and video)

- **find**

  - `find . -name src -type d`

  - `find . -mtime -1` (modification time in the last day )

  - `find . -naame "\*.tmp" -exec rm {} \;`

- **fd** (Simple, fast and user-friendly alternative to find)

- **ripgrep** (For more colorful grep.)

  - `rg -C 5 emoji src` (Get 5 lines of context.)

  - `history | grep convert`

- **fzf** (Type fzf to search over all your files.)

- **tree** (Display directories as trees (with optional color/HTML output))

- **broot** (New way to see and navigate directory trees)
