---
title: Resurecting a file deleted from a git repo
description: "Sometimes when  I'm working in a Git repository, I might delete a
  file that, it later turns out, I shouldn't have done. "
date: 2023-02-16T09:47:37.183Z
tags:
  - git
layout: layouts/note.html
---
Using Git, what's the best way to get back a file that you have previously deleted?

There are two options - that I know of -, `git checkout` and `git restore`. 

Both `git checkout <commit> <filename>` and `git restore --source <commit> <filename>` allow you to restore a specific file to the state it was in at a particular commit. 

But there are some differences in how they work.

The `git checkout <commit> <filename>` command updates the file in your working directory and in the index to match the specified commit. It effectively changes the `HEAD` pointer to the specified commit, then updates the file to its state at that commit. 

This can cause potential problems if you have changes in your working directory that conflict with the changes you are trying to restore. In such a case, Git will show you an error and ask you to commit or stash your changes before proceeding.

`git restore --source <commit> <filename>` command restores the file in your working directory to the specified commit, but WITHOUT updating the index or changing the current branch. 

Most commonly, this is used to undo changes you made to a file in your working directory while leaving the other changes intact. 

Meaning `git checkout <commit> <filename>` changes the HEAD pointer AND updates the file in the index, while `git restore --source <commit> <filename>` ONLY restores the file in the working directory and does not change the HEAD pointer or the index. 

So, if you want to restore a file to a previous state without affecting other changes in your repository, `git restore` is typically a safer command