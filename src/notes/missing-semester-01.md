---
path: "/missing-semster-01"
date: "2020-08-30"
title: "Missing Semester 01 - The Shell"
tags: ["missingSemester", "shell", "terminal"]
excerpt: "(Bourne Again SHell) is a common shell that comes preinstalled on many OS."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=Z56Jmr9Z34Q&list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/course-shell/)

## Bash

- `bash`

(Bourne Again SHell) is a common shell that comes preinstalled on many OS.

- `date` - current date
- `cal` - calendar

* `echo $PATH`

Shows all the paths on your machine that the shell will search for programs (it's a colon-separated list).

- `which echo`

Tells you where a specific program is run from.

## Paths

PATHS are a way to "name a location of a file on your computer".

Absolute paths are paths that fully determine the location of a file.

Relative paths are relative to where you currently are (`pwd`).

If you want to create a directory/file with spaces:

- escape the space with `\`
- put the name in quotes, e.g.: `echo Hello\ World`

## Directories

- `.` (the current directory)
- `..` (the parent directory)
- `~` (the home directory)
- `cd -` (previous directory)

## Man(ual)

Anything that doesn't take value is a flag, and everything that does is an option.
`-a` and `--all` (flags)
`-c` and `--color` (options)

in `man` documentation:
`...` (means 1 or more)
`[]` (means options)

## Permissions

In terms of users: owner, group, everyone else.

Directory permissions (rwx))

-`read`: think of it as a list (can you see files inside a folder)

-`write`: are you allowed to rename, create or remove files within that directory
So if you have `write` permissions on a file, but not the directory in which the file is, you cannot delete that file (you can empty it, but you cannot delete it!)

-`execute`: think of it as search. Are you allowed to enter this directory (CD into it). You need to have `execute` permission on all the parent directories as well!

- `-` indicates that the given principal does not have the given permission

## Streams

"When a program tries to read input, it reads from the input stream, and when it prints something, it prints to its output stream. "

- `>` (append)

- `>>` (overwrite)

- `|` (takes the output of the program to the left and make it input of the program to the right)

## Misc

- `sudo su`

Run root shell - you'll see the `#` prompt (instead of `$`) at the end of your prompt.
Run the following command and shell as superuser

- `tee`

Read from standard input and write to standard output and files (or commands). Tee takes it's input and writes it out to a file + it writes to the stdout.

## From Exercises

-`chmod u+x file`

Give the [u]ser who owns a file the right to e[x]ecute it:
