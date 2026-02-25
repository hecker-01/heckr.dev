---
title: Post Variables Example
date: 25-02-2026
tags: [example, tutorial]
description: An example post demonstrating variable substitution
---

## Welcome, $[username]!

This post demonstrates how to use variables in your markdown posts. You can use `$[variable]` syntax anywhere in your post, and input fields will automatically appear at the top for you to fill in.

### Variables in Text

Hello $[username]! You are learning about variables. Your favorite color is $[color] and you're from $[city].

### Variables in Links

Check out [$[username]'s website](https://$[domain])

Or visit [your GitHub](https://github.com/$[github_username])

### Variables in Code Examples

Variables work great for personalized tutorials:

```bash
echo "Hello $[username]!"
cd /home/$[username]/projects
```

### How does it work?

1. Write `$[variableName]` anywhere in your markdown
2. Variables are automatically detected
3. Input fields appear at the top of the post
4. Fill them in or leave blank to show the variable name
5. The content updates in real-time!

### Escaping Variables

If you want to show the literal syntax without creating a variable, use a backslash: \$[escaped]

This will display as `$[escaped]` instead of creating an input field.

Try filling in the variables at the top of this post to see it in action.
