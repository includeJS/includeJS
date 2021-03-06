---
path: "/automate-github"
date: "2020-04-19"
title: "Better (Automated) GitHub Workflows"
tags: ["git", "productivity", "bash", "egghead"]
description: "GitHub Tips & Tricks"
link: "https://egghead.io/playlists/github-tips-tricks-6fc4"
---

## Creating a GitHub PR Template

`.github/pull_request_template.md`

Create this file and directory at the root of your project. Once you've written the template, make sure to merge onto your default remote branch.

## Creating a GitHub Issue Template

`.github/ISSUE_TEMPLATE/feature_request.md`

This is where your template will live. Besides the markdown content, the template requires `frontmatter`.

```yaml
---
name: Feature Request 💡 (name of the template)
about: Suggest a new idea for the project. ( template description)
labels: enhancement (default template labels)
---

```

## Auto-assigning PRs on GitHub

- `.github/CODEOWNERS`

Create this file at the root of your project.

- @ghuser1 @ghuser2

Add GitHub users (`*` means they will be global owners - a.k.a. the default owners for everything in the repo).

## Automatically Squash Commits on GitHub when Merging Pull Requests

Go to GitHub, Settings, scroll down to Merge button, select **"Allow squash merging"**.

## Automatically Delete Branches after Merging Pull Requests on GitHub

Go to GitHub, Settings, scroll down to Merge button and select **"Automatically delete head branches"**.

## Open a GitHub Draft Pull Request

- Proceed as if you were doing a normal PR, at the final step, instead of clicking "Create pull request", click on the dropdown arrow to the right and choose **"Create draft pull request"**.
- This will create a PR with a "draft" label. Draft PR's can't be merged. To convert it into a standard PR, click **"Ready for review"**.

## Installing GitHub CLI

- `brew install github/gh/gh`

To install it on macOS.

- `gh repo view -w`

Open a Repo in Browser using GitHub CLI.

- `alias repo='gh repo view -w'`

My `alias` 💪.
