---
path: "/linux-one-liners"
date: "2021-03-14"
title: "My favorite command line one-liners (from Linux Comand Library) 🤓"
tags: ["productivity", "bash", "linux"]
description: "Yeah..., so at some point, I did spend half a day going over this list, but hey at least I wrote down my favorites. Sharing here."
link: ""
---
**🔗 The list originally from [here.](https://linuxcommandlibrary.com/basic/oneliners.html)**

List directories only:
- `ls -d */`

Quickly rename a file - one day, this will be me! 😎:
- `mv filename.{old,new}`

Create a quick back-up copy of a file:
- `cp file.txt{,.bak}`

Delete all files in a folder that don't match a certain file extension:
- `rm !(*.foo|*.bar|*.baz)`


Remove all but one specific file 💪:
- `rm -f !(survivior.txt)`


Convert filenames in current directory to lowercase:
- `rename 'y/A-Z/a-z/' *`


Remove all spaces from all files in current the folder (super useful!):
- `rename 's/ //g' *`


Diff two unsorted files without creating temporary files:
- `diff <(sort file1) <(sort file2)`

Rapidly invoke an editor to write a long, complex, or tricky command. I've never really had the use for this one, but I dream of a day when I'll be writing `bash` scipts...
- `ctrl+x + e`


List of commands you use most often (there's also an `oh-my-zsh` command that does the same, but I just couldn't find it... 🤔):
- `history | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head`


```bash
3390 git
1179 g # alias for git
548 cd
333 go # git alias for checkout
321 j # alias for autojump
295 touch
270 npm
215 yarn
209 code # vscode
151 kill # oopsie lots of 🔪
```

Quick access to the ascii table (specifically, the decimal set 👍):
- `man ascii`


Show File System Hierarchy:
- `man hier`

Create a pdf version of a `manpage`:
- `man -t manpage | ps2pdf - filename.pdf`
Maybe useful 🤷‍♀️?

Show apps that use internet connection at the moment:
- `lsof -P -i -n`

Remove security limitations from PDF documents using ghostscript (untested 😅):
- `gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=OUTPUT.pdf -c .setpdfwrite -f INPUT.pdf`

Get the biggest files/folders for the current directory:
- `du -s * | sort -n | tail`

Shows size of dirs and files, hidden or not, sorted:
- `du -cs * .[^\.]* | sort -n`

Remind yourself to leave in 15 minutes (note: To get rid of `leave` you should either log off or use `kill -s KILL` 😬):
- `leave +15`


Download all images from a site:
- `wget -r -l1 --no-parent -nH -nd -P/tmp -A".gif,.jpg" http://example.com/images`

Save command output to an image:
- `ifconfig | convert label:@- ip.png`

Easy and fast access to often executed commands that are very long and complex by using labels:
- `some_very_long_and_complex_command # label`
