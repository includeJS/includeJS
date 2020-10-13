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

I also learned a lot from [Alex' git workshop](https://alexwlchan.net/a-plumbers-guide-to-git/1-the-git-object-store/)


## Git Data Model

Git models the history of a collection of files and folders within some top-level directory (root directory, the directory in which you do `git init`) as a series of snapshots (commits).

🤔 **git init** creates the `.git` directory, which is where Git stores all of its information. If you delete everything except `.git`, you can still rebuild your entire repository.

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

🤔 Also, the content of an object determines its ID (two files with the same content will have the same id!). The technical name for this is a content-addressable filesystem.

- An **object** is a blob, tree, or commit (see above):

`type object = blob | tree | commit`

In Git data store, all objects are content-addressed by their SHA-1 hash:

```
objects = map<string, object>

def store(object):
  // hash-object command
    id = sha1(object)
    objects[id] = object

def load(id):
    return objects[id]
```

🤔 A typical repo has thousands of objects, so Git breaks up objects into subdirectories to avoid any one directory becoming too large.

🤔 What is a hash function?

A hash function is a function that takes in a big piece of data and turns it into a short string.

## References

Branches and refs are human-readable labels to specific commits. "HEAD" is a reference to where we currently are. 

```
references = map<string, string>

// references are mutable
def update_reference(name, id):
    references[name] = id

def read_reference(name):
    return references[name]
// cat-file
def load_reference(name_or_id):
    if name_or_id in references:
        return load(references[name_or_id])
    else:
        return load(name_or_id)
```

💡 At a high level, all git command line commands are just manipulations of references data or objects data: 

- `git add` is a combination of `hash-object` and `update-index`.
- `git commit` comes from `write-tree`, `commit-tree`, and if you’re on a branch, `update-ref`
- `git checkout` uses `update-ref` or `update-symbolic-ref`

If you `ls .git` in a new git repository:

`HEAD   description   info    refs    config    hooks   objects`

- The **HEAD** file tells Git which branch we’re working on
- The **description** file is only used by the GitWeb program – it can be ignored.
- The **info** directory has a single file, exclude, which contains a list of per-repo ignores. Like a gitignore file, but it doesn’t need to be checked in.
- The **refs** directory is empty
- The **config** file contains repo-specific configuration
- The **hooks** directory is used to store scripts that fire on certain events – for example, running a linter before you commit
- The **objects** directory should be empty (aside from two more empty directories)

- You'll get the `index` file once you've added your changes to the staging area (a.k.a. **index**)


💡 Staging area is you telling git what changes should be included in the next snapshot.

- `git cat-file -p [commit sha]`

Git's internal command to print out the contents of the commit (used to inspect objects stored in Git). With this command, we can restore our file even if we delete it – because the object is kept safe in the `.git` directory: 
```
$ rm animals.txt`
$ git cat-file -p b13311e04762c322493e8562e6ce145a899ce570 > animals.txt
```

## Misc Git Commands

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