---
title: Using the Command Line (crashcourse)
slug: using-commandline
date: 16-12-2025
tags: [tutorial, guide, cli, terminal, bash, powershell, windows, linux]
description: A beginner-friendly guide to mastering the command line on Windows and Linux
unlisted: true
---

## Why Learn the Command Line?

The command line (also called terminal, shell, or console) is a powerful tool that lets you interact with your computer using text commands. While it might seem intimidating at first, learning it will:

- Make you faster and more efficient
- Give you more control over your system
- Enable automation of repetitive tasks
- Be essential for development, servers, and IT work

## Opening Your Terminal

### Windows

**PowerShell (Recommended):**

- Press `Win + X` and select "Windows Terminal" or "PowerShell"
- Or press `Win + R`, type `powershell`, and press Enter

**Command Prompt (Legacy):**

- Press `Win + R`, type `cmd`, and press Enter

### Linux/Mac

- Press `Ctrl + Alt + T` (Linux)
- Open Spotlight (`Cmd + Space`) and type "Terminal" (Mac)
- Or find Terminal in your applications menu

## Understanding the Prompt

When you open your terminal, you'll see a prompt waiting for input:

**Linux/Mac (Bash):**

```bash
username@hostname:~$
```

**Windows (PowerShell):**

```powershell
PS C:\Users\Username>
```

The prompt shows your current location. The `~` symbol represents your home directory.

## Navigating the File System

### Print Current Directory

See where you are right now:

| Linux/Mac | Windows                           |
| --------- | --------------------------------- |
| `pwd`     | `pwd` or `cd` (without arguments) |

```bash
# Linux/Mac
pwd
# Output: /home/username

# Windows PowerShell
pwd
# Output: C:\Users\Username
```

### List Files and Folders

See what's in the current directory:

| Linux/Mac | Windows       |
| --------- | ------------- |
| `ls`      | `ls` or `dir` |

```bash
# Linux/Mac
ls

# Show hidden files too
ls -a

# Show detailed information
ls -l

# Combine options
ls -la
```

```powershell
# Windows PowerShell
ls

# Or the classic command
dir

# Show hidden files
ls -Force
```

### Change Directory

Move between folders:

| Linux/Mac | Windows   |
| --------- | --------- |
| `cd path` | `cd path` |

```bash
# Go to a folder
cd Documents

# Go up one level
cd ..

# Go up two levels
cd ../..

# Go to home directory
cd ~       # Linux/Mac
cd $HOME   # Also works on Linux/Mac

# Go to previous directory
cd -       # Linux/Mac only

# Go to root directory
cd /       # Linux/Mac
cd \       # Windows
```

**Windows-specific:**

```powershell
# Change drive
D:

# Go to a folder on another drive
cd D:\Projects
```

### Path Separators

- **Linux/Mac:** Forward slash `/` → `/home/user/Documents`
- **Windows:** Backslash `\\` → `C:\Users\User\Documents`

PowerShell accepts both, but CMD requires backslashes.

## Working with Files and Folders

### Create a Directory

| Linux/Mac.   | Windows      |
| ------------ | ------------ |
| `mkdir name` | `mkdir name` |

```bash
# Create a single folder
mkdir projects

# Create nested folders at once
mkdir -p projects/website/css    # Linux/Mac
mkdir -Path projects/website/css # Windows PowerShell
```

### Create a File

| Linux/Mac        | Windows                              |
| ---------------- | ------------------------------------ |
| `touch filename` | `New-Item filename` or `ni filename` |

```bash
# Linux/Mac
touch notes.txt
touch index.html style.css script.js

# Windows PowerShell
New-Item notes.txt
ni index.html, style.css, script.js
```

### Copy Files and Folders

| Linux/Mac        | Windows                    |
| ---------------- | -------------------------- |
| `cp source dest` | `cp source dest` or `copy` |

```bash
# Copy a file
cp file.txt backup.txt

# Copy to another directory
cp file.txt Documents/

# Copy a folder (recursive)
cp -r folder/ folder-backup/    # Linux/Mac
cp -Recurse folder/ folder-backup/ # Windows PowerShell
```

### Move/Rename Files and Folders

| Linux/Mac        | Windows                    |
| ---------------- | -------------------------- |
| `mv source dest` | `mv source dest` or `move` |

```bash
# Rename a file
mv oldname.txt newname.txt

# Move to another directory
mv file.txt Documents/

# Move and rename
mv file.txt Documents/newname.txt
```

### Delete Files and Folders

| Linux/Mac     | Windows                |
| ------------- | ---------------------- |
| `rm filename` | `rm filename` or `del` |

:::hint danger
Files deleted via terminal bypass the Recycle Bin/Trash. They are gone immediately and cannot be recovered.
:::

```bash
# Delete a file
rm unwanted.txt

# Delete multiple files
rm file1.txt file2.txt

# Delete a folder (recursive)
rm -r foldername       # Linux/Mac
rm -Recurse foldername # Windows PowerShell

# Force delete without confirmation
rm -rf foldername      # Linux/Mac
rm -Recurse -Force foldername # Windows PowerShell
```

## Viewing and Editing Files

### View File Contents

| Linux/Mac      | Windows                           |
| -------------- | --------------------------------- |
| `cat filename` | `cat filename` or `type filename` |

```bash
# Display entire file
cat readme.md

# Display with line numbers
cat -n readme.md  # Linux/Mac
```

### View Large Files

| Linux/Mac       | Windows         |
| --------------- | --------------- |
| `less filename` | `more filename` |

```bash
# Linux/Mac - scrollable viewer
less largefile.log
# Press q to quit, arrows to scroll, / to search

# Windows
more largefile.log
# Press Space for next page, q to quit
```

### View Beginning/End of Files

```bash
# First 10 lines
head filename.txt       # Linux/Mac
Get-Content filename.txt -Head 10  # Windows PowerShell

# Last 10 lines
tail filename.txt       # Linux/Mac
Get-Content filename.txt -Tail 10  # Windows PowerShell

# Specify number of lines
head -n 20 filename.txt
tail -n 50 filename.txt
```

### Edit Files (Terminal Editors)

**Linux/Mac:**

```bash
# Nano (beginner-friendly)
nano filename.txt
# Ctrl+O to save, Ctrl+X to exit

# Vim (powerful but steep learning curve)
vim filename.txt
# Press i to insert, Esc then :wq to save and quit
```

**Windows:**

```powershell
# Open in Notepad
notepad filename.txt

# Or use VS Code if installed
code filename.txt
```

## Searching and Finding

### Find Files

| Linux/Mac | Windows                  |
| --------- | ------------------------ |
| `find`    | `Get-ChildItem -Recurse` |

```bash
# Linux/Mac
# Find by name
find . -name "*.txt"

# Find files modified in last 7 days
find . -mtime -7

# Find by size (larger than 100MB)
find . -size +100M
```

```powershell
# Windows PowerShell
# Find by name
Get-ChildItem -Recurse -Filter "*.txt"

# Short form
gci -r -fi "*.txt"
```

### Search Inside Files

| Linux/Mac           | Windows                      |
| ------------------- | ---------------------------- |
| `grep pattern file` | `Select-String pattern file` |

```bash
# Linux/Mac
# Search for text in a file
grep "error" logfile.txt

# Case-insensitive search
grep -i "error" logfile.txt

# Search recursively in all files
grep -r "TODO" .

# Show line numbers
grep -n "function" script.js
```

```powershell
# Windows PowerShell
Select-String "error" logfile.txt

# Recursive search
Get-ChildItem -Recurse | Select-String "TODO"
```

## Working with Text

### Redirect Output to File

```bash
# Create/overwrite file with output
ls > filelist.txt

# Append to file
echo "new line" >> notes.txt
```

### Pipe Commands Together

Send the output of one command as input to another:

```bash
# Count files in a directory
ls | wc -l           # Linux/Mac
(ls).Count           # Windows PowerShell

# Find specific files and count them
ls | grep ".txt" | wc -l     # Linux/Mac
(ls *.txt).Count             # Windows PowerShell

# Search and paginate results
cat largefile.log | grep "error" | less  # Linux/Mac
```

### Print Text

```bash
# Linux/Mac
echo "Hello, World!"

# Windows PowerShell
echo "Hello, World!"
Write-Host "Hello, World!"
```

## System Information

### View System Info

```bash
# Linux
uname -a         # System information
lsb_release -a   # Distribution info
df -h            # Disk space
free -h          # Memory usage

# Windows PowerShell
systeminfo
Get-ComputerInfo
```

### View Running Processes

| Linux/Mac     | Windows                     |
| ------------- | --------------------------- |
| `ps` or `top` | `Get-Process` or `tasklist` |

```bash
# Linux/Mac
ps aux           # All processes
top              # Live process viewer
htop             # Better process viewer (if installed)

# Windows PowerShell
Get-Process
tasklist
```

### Kill a Process

| Linux/Mac  | Windows                |
| ---------- | ---------------------- |
| `kill PID` | `Stop-Process -Id PID` |

```bash
# Linux/Mac
kill 1234        # Graceful termination
kill -9 1234     # Force kill

# Windows PowerShell
Stop-Process -Id 1234
Stop-Process -Name "notepad"
```

## Network Commands

### Test Connectivity

```bash
# Ping a server
ping google.com

# Limit number of pings (Linux/Mac)
ping -c 4 google.com
```

### View Network Configuration

```bash
# Linux
ip addr
ifconfig    # older systems

# Windows
ipconfig
ipconfig /all
```

### Download Files

| Linux/Mac        | Windows                       |
| ---------------- | ----------------------------- |
| `curl` or `wget` | `Invoke-WebRequest` or `curl` |

```bash
# Linux/Mac
curl -O https://example.com/file.zip
wget https://example.com/file.zip

# Windows PowerShell
Invoke-WebRequest -Uri https://example.com/file.zip -OutFile file.zip
# Or shorter
iwr https://example.com/file.zip -OutFile file.zip
```

## Permissions (Linux/Mac)

### View Permissions

```bash
ls -l
# Output: -rw-r--r-- 1 user group 1234 Jan 1 12:00 file.txt
```

Permission breakdown: `rwx` = read, write, execute for owner, group, others.

### Change Permissions

```bash
# Make a script executable
chmod +x script.sh

# Set specific permissions (owner: rwx, group: rx, others: rx)
chmod 755 script.sh

# Change owner
chown username filename
```

## Environment Variables

### View Environment Variables

```bash
# Linux/Mac
echo $PATH
printenv

# Windows PowerShell
echo $env:PATH
Get-ChildItem Env:
```

### Set Environment Variables

```bash
# Linux/Mac (temporary, current session)
export MY_VAR="value"

# Windows PowerShell (temporary)
$env:MY_VAR = "value"
```

## Useful Shortcuts

### Keyboard Shortcuts (Works in most terminals)

| Shortcut   | Action                           |
| ---------- | -------------------------------- |
| `Tab`      | Auto-complete commands and paths |
| `↑` / `↓`. | Navigate command history         |
| `Ctrl + C` | Cancel current command           |
| `Ctrl + L` | Clear the screen                 |
| `Ctrl + A` | Go to beginning of line          |
| `Ctrl + E` | Go to end of line                |
| `Ctrl + U` | Clear line before cursor         |
| `Ctrl + R` | Search command history           |

### Command History

```bash
# View command history
history

# Run previous command
!!              # Linux/Mac

# Run specific command from history
!123            # Run command number 123
```

## Chaining Commands

```bash
# Run commands sequentially
command1 ; command2 ; command3

# Run next command only if previous succeeds
command1 && command2

# Run next command only if previous fails
command1 || command2

# Example: Create folder and enter it
mkdir newproject && cd newproject
```

## Aliases (Shortcuts for Commands)

### Linux/ Mac

```bash
# Create temporary alias
alias ll="ls -la"
alias ..="cd .."

# Make permanent (add to ~/.bashrc or ~/.zshrc)
echo 'alias ll="ls -la"' >> ~/.bashrc
source ~/.bashrc
```

### Windows PowerShell

```powershell
# Create temporary alias
Set-Alias -Name ll -Value Get-ChildItem

# View all aliases
Get-Alias
```

## Quick Reference Cheat Sheet

| Task              | Linux/Mac              | Windows PowerShell   |
| ----------------- | ---------------------- | -------------------- |
| Current directory | `pwd`                  | `pwd` or `gl`        |
| List files        | `ls`                   | `ls` or `dir`        |
| Change directory  | `cd path`              | `cd path`            |
| Create folder     | `mkdir name`           | `mkdir name`         |
| Create file       | `touch file`           | `ni file`            |
| Copy              | `cp src dest`          | `cp src dest`        |
| Move/Rename       | `mv src dest`          | `mv src dest`        |
| Delete file       | `rm file`              | `rm file`            |
| Delete folder     | `rm -r folder`         | `rm -r folder`       |
| View file         | `cat file`             | `cat file`           |
| Search in file    | `grep pattern file`    | `sls pattern file`   |
| Find files        | `find . -name "*.txt"` | `gci -r -fi "*.txt"` |
| Clear screen      | `clear`                | `clear`              |

## Best Practices

:::hint tip
**Use Tab completion:** Press Tab to auto-complete file names and commands - saves time and prevents typos.
:::

:::hint warning
**Be careful with rm/delete:** Always double-check before deleting, especially with recursive operations.
:::

:::hint tip
**Use man pages:** Type `man command` (Linux/Mac) or `Get-Help command` (PowerShell) for built-in documentation.
:::

:::hint tip
**Learn one thing at a time:** Don't try to memorize everything - learn commands as you need them.
:::

## Troubleshooting

**"Command not found":** The program isn't installed or isn't in your PATH. Try installing it or using the full path.

**"Permission denied":** You don't have rights to access that file/folder. Try using `sudo` (Linux/Mac) or running as Administrator (Windows).

**"No such file or directory":** Check your spelling and make sure you're in the right location with `pwd`.

**Wrong directory:** Use `cd` to navigate to the correct location. Use `cd -` (Linux/Mac) to go back to your previous location.

## Conclusion

The command line is a fundamental skill for any developer or power user. Start with the basics - navigation, file operations, and viewing files - then gradually add more commands to your toolkit as you need them.

Practice regularly, and soon these commands will become second nature. Don't be afraid to experiment (safely!) and use `man` pages or `--help` to learn more about any command.

Happy commanding!
