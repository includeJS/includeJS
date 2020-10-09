---
path: "/remy-CLI"
date: "2020-03-21"
title: "Notes from Command Line Course by Remy Sharp"
tags: ["bash", "productivity"]
description: "Learn command line pipes, alias, zsh, string processing and more."
link: "https://remysharp.com/2018/08/23/cli-improved"
---

## List

- **`ls -ltr`**

l = list,
t = sort by time modified,
r = reverse results

- **`cd -`**

Go to the last directory - great for jumping between two directories.

- **`which [application name]`**

Tells you where the app is running from.

## Find and Pipe

- **`find .`**

Print all the files in the current directory (including hidden files).

- **`find . | grep .md`**

Find all markdown files.

- **`find . | grep .md | wc -l`**

And count how many lines.

- **`find . | grep .md | xargs cat | wc -w`**

How many words in each markdown file.

- **`find [directory] -mtime -1 -ls`**

Find all files modified in the last 24 hours.

- **`find [directory] -mtime -1 -ls | egrep .js$ | awk '{ print $1 }'`**

Find above, but only files ending in `.js` and print out the first column.

## Grep

- **`grep -n [term]`**

Will show the line number of where the match occurred.

- **`grep -c [term]`**

Count the number of occurrences.

- **`grep [term] -n -A 2 -B 2`**

Will print two lines before and two lines after the match.

- **`grep '^#`**

Find all the headings in a markdown file.

## Tail and Less

- **`cat [file] | pbcopy`**

Copy the contents of a file onto the clipboard.

- **`tail -f [file]`**

Follow the file stream (will continue to print newlines).

- **`less`**

For file pagination:

- b navigate backward
- f navigate forward

👩‍💻 Make sure to always sort before using uniq (as it only works on neighboring lines).

- **`egrep '^\s+RT @' freezing.log | sort | uniq -c | sort -nr | less`**

Using `egrep` to search for an expression starting with one or more spaces followed by RT @, sort the result, count the number of uniq ones, sort the result by reverse number and pipe into less for easier perusal 💪

- **`vi /etc/sudoers`**

👩‍💻 see what sudo powers you have

`chmod` and `chown` that I didn't pay attention too (since I don't work in shared environments) 😬.

## Managing processes

- **`ps auxww | grep [term] -i`**

Show all running processes.

- **`kill -9`**

Forced shutdown.

- **`df -h`**

Disk space.

- **`du -hs`**

Disk usage for a particular directory (human readable, summary number).

- **`top /htop`**

- **`uptime`**

For a quick overview (load averages).

## Aliases

My `git` aliases:

- `ga='git add'`
- `gcm='git checkout master'`
- `gd='git diff'`
- `gp='git push'`
- `gf='git fetch'`
- `gl='git pull'`
- `gs='git-status'`

## Wget and Curl

- **`wget [url]`**

Will save that page to your harddrive.

- **`wget -r -l4 -spider -D [url]`**

Will recursively save all the pages (spider), 4 links deep, inside a specific domain.

- **`wget ‐‐level=1 ‐‐recursive ‐‐no-parent ‐‐accept mp3,MP3 http://example.com/mp3/`**

Download all the MP3 files from a sub-directory

- **`wget ‐‐mirror ‐‐domains=abc.com,files.abc.com,docs.abc.com ‐‐accept=pdf http://abc.com/`**

Download the PDF documents from a website through recursion but stay within specific domains.

- **`curl [url] | scrape p`**

Would scrape all the `p` tags from that page.

- **`curl -I [url]`**

Returns headers.

- **`curl -L -I -X GET [url]`**

GET request, get all headers, following redirects.

👩‍💻 In browser developer tools, Networks tab, you can copy each request as Curl (and then run it locally).

## Misc

`Ngrok`: will tunnel any local port into a public url.

- **`cat [file.json] | json --keys`**

Will list out all the keys at root level.

- **`json -a`**

Process array as an object which allows for lookups.

- **`awk '{ print $2 }'`**

Split the string up by spaces and print the second column only (`$0` represents the entire string).

- **`ps auxww | grep node | awk '{ print $1 }'`**

Find all node processes.

- **`ps auxww | grep node | awk '{ print $1 }' | xargs kill`**

Find them and destroy them! `xargs` takes the pipped in output and takes it as an argument for the next thing.
