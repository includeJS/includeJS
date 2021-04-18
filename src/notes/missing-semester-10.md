---
path: "/missing-semester-10"
date: "2020-11-07"
title: "Missing Semester 10 - Potpourri"
tags:
  - missing-semester
  - bash
  - productivity
  - keyboard-shortcuts
description: "Miscellaneous programming topics and tools: keyboard remapping, daemons, virtual machines and more 💪"
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=JZDt-PRq0uo&feature=emb_logo)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/potpourri/)

## Keyboard remapping

This usually involves some software that is listening and, whenever a certain key is pressed, it intercepts that event and replaces it with another event corresponding to a different key.

Further links for Karabiner (macOS) config:

- [Nikita Voloboev's extensive setup](//wiki.nikitavoloboev.xyz/macos/macos-apps/karabiner)
- [Another example](https://blog.jkl.gg/hacking-your-keyboard/)

👍 It's recommended to use `goku` (and the `.edn` format) for the Karabiner config file instead of `.json` format, which is super bloated.

My current remappings:

- `CapsLock` -> another modifiter key
- `Shift` + `CapsLock` -> Caps Lock
- `Right Shift` + `w`/`a`/`s`/`d` -> right-side arrow keys
- `CapsLock` + `f` -> full-screen everything
- `CapsLock` + `t` -> open terminal

## Daemons

Daemons are processes that are often started when the system is bootstrapped and terminate only when the system is shut down. Because they don’t have a controlling terminal, they run in the background. The programs that run as daemons often end with a `d` to indicate so.

For example, `sshd`, the SSH daemon, is the program responsible for listening to incoming SSH requests and checking that the remote user has the necessary credentials to log in.

🤔 **What is the difference between daemons and launch agents?**

Daemons are system-wide services that always run in the background, while agents describe regular services that are to be executed on user-specific events.

🤔 **Where can I find launch daemons and agents?**

- `~/Library/LaunchAgents`
- `/Library/LaunchAgents`
- `/Library/LaunchDaemons`
- `/System/Library/LaunchAgents`
- `/System/Library/LaunchDaemons`

## FUSE

Filesystem in Userspace (FUSE) is a software interface for Unix and Unix-like computer operating systems that lets non-privileged users create their own file systems without editing kernel code. This is achieved by running file system code in user space while the FUSE module provides only a "bridge" to the actual kernel interfaces.

FUSE is useful especially for writing Virtual file systems where you don't store/retrieve data from an actual disk.

Examples:

- `GmailFS`: filesystem which stores data as mail in Gmail
- `WikipediaFS`: View and edit Wikipedia articles as if they were real files

## Backups

[More info on backups here.](https://missing.csail.mit.edu/2019/backups/)

## APIs

👍

## Command-line Arguments

- `--help` flag to display brief usage instructions for the tool.
- `--dry-run` which only prints what the command would do but does not actually perform the change.
- `-i` for “interactive” (especially for destructive actions)
- `--version` or `-V` for program version.
- `--verbose` or `-v` flag to produce more verbose output. `-vvv` for even more verbose output
- `--quiet` flag for making it only print something on error.
- `-` in place of a file name means “standard input” or “standard output”, depending on the argument.
- `-r` for recursive
- `--` makes a program stop processing flags and options (things starting with -) in what follows, letting you pass things that look like flags without them being interpreted as such: `rm -- -r or ssh machine --for-ssh -- foo --for-foo.`

## Window managers

Rectangle (similar to RIP Spectacle) vs Magnet vs [others](https://www.producthunt.com/ask/2355-what-s-the-best-window-manager-for-mac)

## VPNs

👍

## Markdown

👍

## Hammerspoon (desktop automation on macOS)

Hammerspoon is a desktop automation framework for macOS. It lets you write Lua scripts that hook into operating system functionality, allowing you to interact with the keyboard/mouse, windows, displays, filesystem, and much more.

- [Getting started with Hammerspoon](https://www.hammerspoon.org/go/)
- [Sample configurations](https://github.com/Hammerspoon/hammerspoon/wiki/Sample-Configurations)

## Booting + Live USBs

Live USBs are USB flash drives containing an operating system.

## Docker, Vagrant, VMs

Virtual machines and similar tools like containers, let you emulate a whole computer system, including the operating system.

`Vagrant` is a tool that lets you describe machine configurations (operating system, services, packages, etc.) in code, and then instantiate VMs with a simple vagrant up. `Docker` is conceptually similar but it uses containers instead.

## Notebook programming

Like Jupyter, for Python.

## GitHub

👍
