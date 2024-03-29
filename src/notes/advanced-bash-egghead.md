---
path: "/advanced-bash"
date: "2020-04-18"
title: "More Bash Bashing"
tags: ["bash", "productivity", "egghead"]
description: "Advanced Bash Automation for Web Developers"
link: "https://egghead.io/courses/advanced-bash-automation-for-web-developers"
---

## Scripts and Expansions

- `stat [file]`

Show file properties such as size, permissions, creation, access dates and more!

- `type [alias]`

To quickly check what your `alias` does.

- `echo $PATH`

To see the list of executables.

- `export PATH="$PATH:~/scripts-folder"`

To add a folder to the executables (that way you'll be able to run your scripts from anywhere).

- `ln -s ~/scripts-folder/script /usr/local/bin`

You can also create a soft link to the `usr/local/bin` (where your scripts should generally live).

- `cp index.js{,.backup}`

This will create a file called `index.js.backup` with the contents of `index.js`

- `touch test-{1..10}`

Will create 10 test files starting with `test-1`. Not all commands accept multiple inputs, but `touch` does.

## Bash Navigation

- `!!`

Run the last command again.

- `!$`

Gives you the last **argument** of the previous command.

- `ctrl + a`: go to the beginning of th line.
- `ctrl + e`: go to the end of the line.
- `ctrl + k`: to delete the line up to the cursor.
- `ctrl + w`: delete the last word.

## Curl GitHub

`curl -s https://api.github.com/repos/edieblu/includeJS.dev | jq '.stargazers_count'`

Get the numbers of stars in a GitHub repo.

## `jq`

```bash
for dep in $(jq -r '.dependencies | keys | .[]' package.json); do
  if ! grep "required\(.*$dep.*)" Rq --exclude-dir="node_modules" ." then
    echo "You can probably remove $dep"
  fi
done
```

Use jq and grep to find unused dependencies.

- `keys`: to get just the keys out of the jq object
- `.[]`: array value iterator to get the values in a separate line
- `r`: flag in jq means raw text (no quotations)
- `Rq`: recursive and quiet

## `exec`

Changes where `stdout` and `stderr` go for all commands that come after it.

`exec >> log/hooks-out.log 2>&1`

Append `standard error` to the same place and in the same mode than `standard output` is in.

## `git diff`

`if git diff-tree --name-only --no-commit-id ORIG_HEAD HEAD`

This will return the differences between the previous and current commits as a bare list of files.

```bash
if git diff-tree --name-only --no-commit-id ORIG_HEAD HEAD | grep --quiet 'package.json'; then
 echo "$(date): Running npm install because package.json changed"
 npm install
else
 echo "$(date): No changes in package.json found"
fi
```

Check if `package.json` has been changed and run `npm install` if it did.

- `npm install > /dev/null`

If you output to `/dev/null` the output will be discarded. Note that errors will still be outputed.

## Extracting

```bash
case "$1" in
  *.tar|*.tgz) tar -xzvf "$1";;
  *.gz) gunzip -k "$1";;
  *.zip) unzip -v "$1";;
  *)
    echo "Cannot extract $1"
    exit 1
  ;;
esac
```

A script that extracts a file archive, depending on the file extension.

## Random

- `#!/usr/bin/env node`

This tells the shell to use the `node` binary in your environment to execute this file.

- `.plist`

A `.plist` file is an `XML`-formatted file for macOS.

- `~/Library/LaunchAgents/`

List all applications with job configuration.

## Similar notes
- [Automate with Bash](/notes/automate-with-bash)
- [Notes from Command Line Course by Remy Sharp](/notes/remy-CLI)
