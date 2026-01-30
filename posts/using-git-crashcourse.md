---
title: Using git (crashcourse)
slug: using-git-crashcourse
date: 30-01-2026
tags: [tutorial, guide, git, version-control, cli]
description: A simple guide on how to use the git bash properly
---

## Prerequisites

Before starting, make sure you have Git installed on your machine. Download it from [Git's official website](https://git-scm.com/downloads). You can verify the installation by opening your terminal (PowerShell on Windows, Terminal on Mac/Linux) and running:

```bash
git --version
```

If you see a version number, you're ready to go!

## Initial Setup

### Configure Your Identity

Before making your first commit, tell Git who you are. This information will be attached to all your commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Optional but recommended:** Enable colored output for better readability:

```bash
git config --global color.ui auto
```

### Verify Your Configuration

Check that your settings are correct:

```bash
git config --list
```

## Getting Started with a Repository

You have two options to start working with Git: create a new repository or clone an existing one.

### Option 1: Create a New Repository

Navigate to your project folder and initialize Git:

```bash
cd your-project-folder
git init
```

This creates a `.git` folder that tracks all your changes.

### Option 2: Clone an Existing Repository

Download an existing project from GitHub, GitLab, or another hosting service:

```bash
git clone https://github.com/username/repository-name.git
```

This downloads the entire project including all its history.

## Basic Workflow

This is the workflow you'll use daily when working with Git.

### 1. Check Your Status

See which files have been modified:

```bash
git status
```

This shows you:

- Files you've changed but not staged
- Files staged and ready to commit
- Untracked files Git isn't watching yet

### 2. Stage Your Changes

Add files to the staging area (preparing them for commit):

**Stage a specific file:**

```bash
git add filename.txt
```

**Stage all changes:**

```bash
git add .
```

**Stage multiple specific files:**

```bash
git add file1.txt file2.js file3.css
```

If you accidentally staged a file, you can unstage it:

```bash
git reset filename.txt
```

### 3. Review Your Changes

Before committing, it's good practice to review what you've changed:

**See unstaged changes:**

```bash
git diff
```

**See staged changes:**

```bash
git diff --staged
```

### 4. Commit Your Changes

Save your staged changes with a descriptive message:

```bash
git commit -m "Add user authentication feature"
```

**What makes a good commit message:**

- Start with a verb (Add, Fix, Update, Remove)
- Be specific but concise
- Explain _what_ changed and _why_ if not obvious

### 5. View Your History

See a list of all commits:

```bash
git log
```

**For a condensed view:**

```bash
git log --oneline
```

## Working with Branches

Branches let you work on features without affecting the main codebase.

### View Branches

List all branches (the asterisk shows your current branch):

```bash
git branch
```

### Create a New Branch

```bash
git branch feature-name
```

### Switch to a Branch

```bash
git checkout feature-name
```

**Shortcut:** Create and switch to a new branch in one command:

```bash
git checkout -b feature-name
```

### Merge Branches

Once your feature is complete, merge it back into the main branch:

```bash
git checkout main
git merge feature-name
```

### Delete a Branch

After merging, you can delete the feature branch:

```bash
git branch -d feature-name
```

## Collaborating with Remote Repositories

Working with GitHub, GitLab, or other remote repositories.

### View Your Remote

See which remote repositories are connected:

```bash
git remote -v
```

### Add a Remote

If you initialized a local repo and want to connect it to a remote:

```bash
git remote add origin https://github.com/username/repository-name.git
```

### Push Your Changes

Upload your local commits to the remote repository:

**First push (set upstream):**

```bash
git push -u origin main
```

**Subsequent pushes:**

```bash
git push
```

### Pull Changes

Download and merge changes from the remote repository:

```bash
git pull
```

This is essential before starting work to ensure you have the latest code.

### Fetch Changes

Download changes without merging (lets you review first):

```bash
git fetch
```

## Useful Commands for Daily Work

### Temporarily Save Changes

If you need to switch branches but aren't ready to commit:

**Save your work:**

```bash
git stash
```

**List stashed changes:**

```bash
git stash list
```

**Restore your work:**

```bash
git stash pop
```

**Discard stashed changes:**

```bash
git stash drop
```

### Move or Rename Files

Let Git track file movements:

```bash
git mv old-filename.txt new-filename.txt
```

### Remove Files

Delete files and stage the removal:

```bash
git rm filename.txt
```

## Using .gitignore

Prevent Git from tracking certain files (like build outputs, secrets, or dependencies).

Create a `.gitignore` file in your project root:

```gitignore
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.log

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE settings
.vscode/
.idea/
```

## Common Scenarios & Solutions

### Scenario 1: Undo Last Commit (Keep Changes)

Made a commit too early?

```bash
git reset --soft HEAD~1
```

Your changes stay staged and ready to recommit.

### Scenario 2: Discard Local Changes

Want to throw away all your uncommitted changes?

```bash
git reset --hard HEAD
```

**Warning:** This permanently deletes your changes!

### Scenario 3: View a Specific File's History

See all changes to one file:

```bash
git log --follow filename.txt
```

### Scenario 4: Compare Branches

See what's different between two branches:

```bash
git diff main..feature-branch
```

## Best Practices

**Commit frequently:** Small, focused commits are easier to understand and revert if needed.

**Write clear messages:** Your future self (and teammates) will thank you.

**Pull before you push:** Always get the latest changes before uploading yours to avoid conflicts.

**Use branches:** Keep your main branch stable by developing features in separate branches.

**Review before committing:** Use `git diff` to check what you're about to commit.

**Don't commit sensitive data:** Use `.gitignore` for secrets, API keys, and credentials.

## Troubleshooting

**Merge conflicts:** If Git can't automatically merge changes, it will mark the conflicts in your files. Open them, resolve the conflicts manually, then stage and commit the resolved files.

**Wrong branch:** If you started working on the wrong branch, use `git stash`, switch branches with `git checkout`, then `git stash pop`.

**Forgot to pull:** If your push is rejected, run `git pull` first to get remote changes, resolve any conflicts, then push again.

**Committed to wrong branch:** If you haven't pushed yet, you can undo with `git reset --soft HEAD~1`, switch branches, and recommit.

## Conclusion

That's it! You now know the essential Git commands for daily development. The key is to practice these workflows regularly - they'll become second nature quickly. Remember to commit often, use descriptive messages, and don't be afraid to experiment with branches.

I'll make a follow-up guide on using Git visually (no commandline) in VSCode soon.
