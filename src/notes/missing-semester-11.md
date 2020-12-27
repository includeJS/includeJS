---
path: "/missing-semester-11"
date: "2020-11-14"
title: "Missing Semester 11 - QA"
tags:
  - missing-semester
  - bash
  - productivity
description: "Q and A session (brielfy) covering a wide range of topics 🤔"
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=Wz50FvGG6xU)
- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/qa/)

## What are some of the tools you’d prioritize learning first?

- Learn your code editor well (more keyboard, less mouse).
- Learning how to automate and/or simplify repetitive tasks in your workflow because the time savings will be enormous
- Git and Github

## When do I use Python versus a Bash script versus some other language?

In general, bash scripts are useful for short and simple one-off scripts when you just want to run a specific series of commands. For larger and/or more complex scripts use a more mature scripting languages like Python or Ruby (bash scripts can easily become overly complicated and unreadable).

But also (for bash vs Python):

- bash is more performant (better start-up time, but not ecessarily better execution time) and better for pipping
- Python is more elegant and more powerful, also more general purpose. Also better debugging tools

## What is the difference between source script.sh and ./script.sh?

In both cases, the `script.sh` will be read and executed in a bash session, the difference lies in which session is running the commands.

- source `script.sh` command are executed in current bash session, so any changes made in the current environment (such like changing directories or defining functions, all variable assignments) will persist.

- `./script` will run a new instance of bash, the variables aren't preserved.

## What are the places where various packages and tools are stored and how does referencing them work?

In general, there are some conventions about where specific types of files live.

- `/bin` - Essential command binaries
- `/sbin` - Essential system binaries, usually to be run by root
- `/dev` - Device files, special files that often are interfaces to hardware devices
- `/etc` - Host-specific system-wide configuration files
- `/home` - Home directories for users in the system
- `/lib` - Common libraries for system programs
- `/opt` - Optional application software
- `/sys` - Contains information and configuration for the system (covered in the first lecture)
- `/tmp` - Temporary files (also /var/tmp). Usually deleted between reboots.
- `/usr/` - Read only user data
  - `/usr/bin` - Non-essential command binaries
  - `/usr/sbin` - Non-essential system binaries, usually to be run by root
  - `/usr/local/bin` - Binaries for user compiled programs
- `/var` - Variable files like logs or caches

## What is the difference between Docker and a Virtual Machine?

### What is a VM?

A virtual machine is a system that acts exactly like a computer.Each virtual machine requires its underlying operating system, and then the hardware is virtualized.

### And Docker?

Docker is a tool that uses containers to make the creation, deployment, and running of applications a lot easier. It binds the application and its dependencies inside a container.

### And the difference?

The main difference between containers and virtual machines is that virtual machines will execute an entire OS stack, including the kernel, even if the kernel is the same as the host machine.

Unlike VMs, containers avoid running another instance of the kernel and instead share the kernel with the host.

|                     VM                     |                           Docker                           |
| :----------------------------------------: | :--------------------------------------------------------: |
|      Hardware-level process isolation      |                 OS level process isolation                 |
|         Each VM has a separate OS          |                Each container can share OS                 |
|              Boots in minutes              |                      Boots in seconds                      |
|             VMs are of few GBs             |            Containers are lightweight (KBs/MBs)            |
|    Ready-made VMs are difficult to find    |      Pre-built docker containers are easily available      |
|      VMs can move to new host easily       | Containers are destroyed and re-created rather than moving |
| Creating VM takes a relatively longer time |            Containers can be created in seconds            |
|            More resource usage             |                    Less resource usage                     |

The table is courtesy of [Geekflare](https://geekflare.com/docker-vs-virtual-machine/)
