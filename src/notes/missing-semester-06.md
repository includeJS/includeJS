---
path: "/missing-semester-06"
date: "2020-10-12"
title: "Missing Semester 06 - Version Control (Git)"
tags:
  - missing-semester
  - bash
  - git
description: "Version control systems (VCSs) are tools used to track changes to source code (or other collections of files and folders) 🤓."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=2sjqTHE0zok&t=1s)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/version-control/)


## Git Data Model

Git models the history of a collection of files and folders within some top-level directory (root directory, the directory in which you do `git init`) as a series of snapshots (commits).

In git folders are **trees**, and files are **blobs**. 

In pseudocode:

- A **file** is a bunch (array) of bytes:

`type blob = array<byte>`

- A **directory** contains named files and directories (mappings from the file/directory name to the actual contents - contents being another tree or a blob):

`type tree = map<string, tree | blob>`

- A **commit** has parents, metadata, and the top-level tree:
```
type commit = struct {
    parent: array<commit>
    author: string
    message: string
    snapshot: tree
}
```

## Objects and content-addressing

🤔 What do we mean by content-addressable? It means that at the core of Git is a simple key-value data store. This means you can insert any kind of content into a Git repository, for which Git will hand you back a unique key you can use later to retrieve that content. [More on git objects from Git Book](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

- An **object** is a blob, tree, or commit (see above):

`type object = blob | tree | commit`

In Git data store, all objects are content-addressed by their SHA-1 hash:

```
objects = map<string, object>

def store(object):
    id = sha1(object)
    objects[id] = object

def load(id):
    return objects[id]
```

🤔 What is a hash function?

A hash function is a function that takes in a big piece of data and turns it into a short string.

## References

References are pointers to the commits. "HEAD" is a reference to where we currently are. 

```
references = map<string, string>

// references are mutable
def update_reference(name, id):
    references[name] = id

def read_reference(name):
    return references[name]

def load_reference(name_or_id):
    if name_or_id in references:
        return load(references[name_or_id])
    else:
        return load(name_or_id)
```

💡 Git repository: is the data objects and references.

💡 At a high level, all git command line commands are just manipulations of references data or objects data.

If you `ls .git` in a new git repository:

`HEAD   description   info    refs    config    hooks   objects`

💡 Staging area is you telling git what changes should be included in the next snapshot.

- `git cat-file -p [commit sha]`

Git's internal command to print out the contents of the commit (used to inspect objects stored in Git).

- `git commit -a`

To commit all the changes for files that are already tracked - so you can potentially skip `git add .`

💡 Think of merging as being the opposite of branching. 

🤔 `git pull` === `git fetch & git merge`

- `git add -p`

For interactively deciding what you want to add.

- `git blame [filename]`

To see who made changes to the file.

- `git show [commit sha]`

To see the changes made in the commit.

- `git bisect`

Use binary search to find the commit that introduced a bug.