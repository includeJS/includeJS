---
path: "/missing-semester-05"
date: "2020-10-04"
title: "Missing Semester 05 - Command-Line Environment"
tags:
  - missing-semester
  - bash
description: "Job control, terminal multiplexers, dotfiles, and remote machines 🤓."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=e8BO_dYxk5c&feature=emb_logo)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/command-line)

## 1. Job Control

- `SIGINT`: Term Interrupt from keyboard (`ctrl + c`)

- `SIGQUIT`: Core Quit from keyboard (`ctrl + \`)

- `SIGHUP`: Terminal line hangup (if you close your terminal, but things - e.g. servers - are still running in the background)

- `SIGKILL`: Term Kill signal - be vary, can lead to orphan processes

- `SIGTERM`: Term Termination signal

- `SIGSTOP`: Stop process `ctrl + z`

We can then continue the paused job in the foreground or in the background using `fg` or `bg`.

### Misc

- `sleep 20`
  Put the process to sleep for 20 seconds.

- `jobs`

The jobs command lists the unfinished jobs associated with the current terminal session.

- `kill`

Sends a signal to a process, usually related to stopping the process, e.g. `SIGKILL` is `kill -9 [pid]`. All signals except for SIGKILL and SIGSTOP can be intercepted by the process to perform a clean exit.

If you add `&` to the end of a terminal command, it will start the execution in the background.

🤔 What does `ctr + d` do?

It sends an EOF (end-of-file) marker, unless disabled by an option, this will close the current shell (EXIT).

## 2. Terminal Multiplexers

Terminal multiplexers like tmux allow you to multiplex terminal windows using panes and tabs so you can interact with multiple shell sessions.

The most popular terminal multiplexer these days is `tmux`. To operate tmux you'll have to learn keybindings.

tmux terminology:

- **sessions**: a session is an independent workspace with one or more windows
- **windows**: Equivalent to tabs in editors or browsers, they are visually separate parts of the same session
- **panes**: Like vim splits, panes let you have multiple shells in the same visual display.

🤔 What is `emacs`?

The extensible, customizable, self-documenting, real-time display editor (aka a powerful and highly customizable text editor)

## 3. Dotfiles

- `alias`

A shell alias is a short form for another command that your shell will replace automatically for you. You can alias a command to that same command with your favorite flags: e.g. `mv -i`

Examples of programs with dotfiles:

- `bash` - ~/.bashrc, ~/.bash_profile
- `git` - ~/.gitconfig
- `vim` - ~/.vimrc and the ~/.vim folder
- `ssh` - ~/.ssh/config
- `tmux` - ~/.tmux.conf

## 4. Remote machines

- `ssh`

Stands for Secure shell and is a program for logging into a remote machine and for executing commands on a remote machine.

- `ssh username@remote_host`

Connect to a remote server.

- `ssh-keygen`

To generate `ssh` keys.
