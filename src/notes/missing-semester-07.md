---
path: "/missing-semester-07"
date: "2020-10-17"
title: "Missing Semester 07 - Debugging and Profiling"
tags:
  - missing-semester
  - bash
description: "On logging, ANSI escape codes, debuggers, profilers, and resource monitoring."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=l812pUnKxME&)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/debugging-profiling/)

## Debugging

### 1. prinf debugging a.k.a. console.log()

### 2. Logging
Which is better because:
- you can log to files, sockets, or even remote servers instead of standard output
- you can add severity levels (+ color coding)
- logging more information

🤔 **How do you output colors in the terminal?**
**ANSI escape codes** are standardized commands used to manipulate the behavior and appearance of the text in a terminal or terminal emulator.

ANSI escape sequence is a sequence of ASCII characters, the first two of which are the ASCII "Escape" and the left-bracket character "[". The character or characters following the escape and left-bracket characters specify an alphanumeric code that controls a keyboard or display function. 

The most basic terminals have a set of 8 different colors:

- Black: `\u001b[30m`
- Red: `\u001b[31m`
- Green: `\u001b[32m`
- Yellow: `\u001b[33m`
- Blue: `\u001b[34m`
- Magenta: `\u001b[35m`
- Cyan: `\u001b[36m`
- White: `\u001b[37m`

- Reset: `\u001b[0m`

Example: 

- `print "\u001b[30m A \u001b[31m B \u001b[32m C \u001b[33m D \u001b[0m"`

This will print letters A (in black), B (pink), C (green), D (yellow).

### 3. Third party logs
- `var/log/system.log`

Or more commonly, the system log (`/var/log/system.log`):
- `log show`

🤔 You can also see system logs in:

 `Finder > Applications > Utilities > Console.`

- `log show --last 10s`

Show logs for the past 10 seconds.

- `logger "hello logs"`

Add stuff to the system log (using a shell program called `logger`).

- `log show --last 1m | grep hello`

Find that log (the one you just added)


### 🤔 More log files on macOS

- System Log Folder: `/var/log`
- System Log: `/var/log/system.log`
- Mac Analytics Data: `/var/log/DiagnosticMessages`
- System Application Logs: `/Library/Logs`
- System Reports: `/Library/Logs/DiagnosticReports`
- User Application Logs: `~/Library/Logs` (in other words, `/Users/NAME/Library/Logs`)
- User Reports: `~/Library/Logs/DiagnosticReports` (in other words, `/Users/NAME/Library/Logs/DiagnosticReports`)


### 4. Debuggers

Debuggers are programs that let you interact with the execution of a program and allow you to:
- Halt execution of the program when it reaches a certain line.
- Step through the program one instruction at a time.
- Inspect values of variables after the program crashed.
- Conditionally halt the execution when a given condition is met.

### 5. Static analysis

Static analysis programs take source code as input and analyze it using coding rules to reason about its correctness (linters), e.g. `shellcheck` for shell scripts, `prettier` for HTML, CSS, JS.   

- [JavaScript static analysis tools](https://github.com/analysis-tools-dev/static-analysis)
- [And a bunch more linters](https://github.com/caramelomartins/awesome-linters)

## Profiling

### 1. Timing
Similarly to the debugging case, in many scenarios, it can be enough to just print the time it took your code between two points. 

- **real time**: elapsed time from start to finish of the program, including the time taken by other processes and time taken while blocked
- **user time**: Amount of time spent in the CPU running user code
- **system time**: Amount of time spent in the CPU running kernel code

Example:

- `time curl https://missing.csail.mit.edu &> /dev/null`

Will output how long in real, user, and system time it takes to `curl` that specific url.

### 2. Profilers
Most of the time, when people refer to profilers, they actually mean CPU profilers.

- **tracing** profilers: tracing profilers keep a record of every function call your program makes
- **sampling** profilers: probe your program periodically (commonly every millisecond) and record the program’s stack

🤔 [Logging vs Tracing vs Monitoring](https://winderresearch.com/logging-vs-tracing-vs-monitoring/)
- We use **logging** to represent state transformations within an application. When things go wrong, we need logs to establish what change in the state caused the error.
- A **trace** represents a single user’s journey through an entire stack of an application. It is often used for optimization purposes. For example, you would use it to establish little used part of a stack or bottlenecks within specific parts of the stack.
- **Instrumenting** an application and **monitoring** the results represents the use of a system. It is most often used for diagnostic purposes. For example, we would use monitoring systems to alert developers when the system is not operating “normally”.

🤔 Also this [Twitter thread](https://twitter.com/mipsytipsy/status/911711540008628224).

There's also line profiler, memory profiler, event profiling. 

### 3. Resource monitoring
- `htop`

A process viewer. 

- `du -h [path]`

List the sizes of a directory and any subdirectories in human-readable form (i.e. auto-selecting the appropriate unit for each size)

- `lsof` 

Lists file information about files opened by processes.

- `lsof path/to/file` 

Find the processes that have a given file open.

- `lsof -i :port` 

Find the process that opened a local internet port.