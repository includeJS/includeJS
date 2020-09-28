---
path: "/missing-semester-04"
date: "2020-09-28"
title: "Missing Semester 04 - Data Wrangling"
tags:
  - missing-semester
  - bash
description: "Data wrangling is taking data in one format and changing it into a different format 💡."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=sz_dsktIjt4&feature=emb_logo)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/data-wrangling/)

**Shoutout to [tldr](https://formulae.brew.sh/formula/tldr) and [dashdash](https://dashdash.io/1) for making the `man` files much easier to work with👍!**

Note, I have `tldr` aliased to `help`, it's much easier to type! (my [other bash `alias`es](https://gist.github.com/edieblu/ac74baf5b8cb1fd66edb2c0218c508e1)). 

## Regex

- `.` means “any single character” except newline
- `*` zero or more of the preceding match
- `+` one or more of the preceding match
- `[abc]` any one character of a, b, and c
- `(RX1|RX2)` either something that matches RX1 or RX2
- `^` the start of the line
- `$` the end of the line

**greedy** matching is to match as much as you can. Add a `?` to make matching non-greedy.

**capture group** is any text matched by a regex surrounded by parentheses and stored in a numbered capture group ( `\1`, `\2`, `\3`).

## Sed

Edit (`find` & `replace`) text in a (non-interactive) scriptable manner.

- `echo "Welcome to the jungle" | sed 's/jungle/party/'`

Find the string `jungle` and replace it with string `party`.

- `sed 's/jungle/super party/' jungleFile`

Find the string `jungle` (inside the file `jungleFile`) and replace it with `super party`.

- `sed 's/jungle/super party/gi' myfile`

Find all occurrences of the string `jungle` and replace them with `super party` (ignoring character case).

- `sed -n '5,10p' myfile.txt`

Return lines 5 to 10 inside the file `myfile.txt`.

- `sed '20,35d' myfile.txt`

Return all of the file except for lines 20-35 inside the file `myfile.txt`.

`sed`’s regular expressions are somewhat weird, and will require you to put a `\` before most of these to give them their special meaning. Or you can pass `-E`.

- `sed "s/[aeiou]/*/g" myfile.txt`

Find all vowels and replace them with `*`.

- `sed 's/[aeiou]/\u&/g' birthday.txt`

`&` is the capture group, `\u` makes all the vowels uppercase.

[More `sed` examples.](http://conqueringthecommandline.com/book/sed)

## wc

- `wc -l file`

Count lines in file.

- `wc -w file`

Count words in file.

## sort

- `sort filename`

Sort a file in ascending order.

- `sort -r`

In reverse order

- `sort -n`

Will sort in numeric (instead of lexicographic) order

- `sort -r filename`

Sort a file in descending order.

## uniq

- `uniq -c`

Will collapse consecutive lines that are the same into a single line, prefixed with a count of the number of occurrences

- `sort file | uniq`

Display each line once.

- `sort file | uniq -d`

Display only duplicate lines.

## awk

For editing column data.

Awk assigns some variables for each data field found:

- `$0` for the whole line.
- `$1` for the first field.
- `$2` for the second field.
- `$n` for the nth field.

Fun alert!

- `history | awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | grep -v "./" | column -c3 -s " " -t | sort -nr | nl | head -n10`

Display 10 most frequently used bash commands from history.

## xargs

- `xargs`

Takes a list of inputs and turns them into arguments. Execute a command with piped arguments coming from another command, a file, etc.

- `ls CC* | xargs wc`

Print the number of lines/words/characters in each file in the list

- `find /tmp -name core -type f -print | xargs /bin/rm -f`

Find files named core in or below the directory /tmp and delete them. Note that this will not work correctly if there are any filenames containing newlines or spaces.

- `find /tmp -name core -type f -print0 | xargs -0 /bin/rm -f`

Find files named core in or below the directory /tmp and delete them, processing filenames in such a way that file or directory names containing spaces or newlines are correctly handled.

- `find /tmp -depth -name core -type f -delete`

Find files named core in or below the directory /tmp and delete them, but more efficiently than in the previous example.

💪 My own legit and tested example:

- `find . -iname 'IMG*.jpg' -mtime -20 | xargs exiftool -All=`

Find (case insensitive) all images that start with `IMG`, less than 20 days old and remove their EXIF data.

## Misc

- `less`

Open a file for interactive reading, allowing scrolling and search.

- `bc -l`

Run calculator in interactive mode using the standard math library:
