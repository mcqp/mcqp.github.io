---
sidebar_position: 1
title: Create Single Choice Poll
---

# Create Single Choice Poll
A single choice poll is a type of poll that only allows users to select one option. 
This type of poll does not include a note or correct answer.

## Poll Syntax
To send polls to **Telegram**, use the `p:` keyword to define the poll section. Let's explain the syntax:
```mcq
╭────────── The start of the poll section
|          ╭────────── The poll question
|          |
|  ╭────────────────╮
p: How are you today?
    Amazing    ╮
    Good       |
    Bad        |────────── The poll options
    Horrible   |
               ╯ 
╰──╯─────╮
         |
         ╰───────── An indentation to identify the options
```
You must follow these rules:
1. The poll question length must be between 1 and 255 characters.
2. Each option length must be between 1 and 100 characters.
3. The number of options must be between 2 and 10.
4. Prefix the options with indentation.
5. The section header must not contain spaces before `p:`.

---
## Example
Create a file named `poll.mcq` (it must have the `.mcq` extension) and write:
```mcq title="poll.mcq" showLineNumbers
p: How are you today?
    Amazing
    Good
    Bad
    Horrible

p: What is your favorite programming language
    1. C/C++
    2. Rust
    3. Go
    4. Python
    5. JavaScript
    6. Ruby
    7. C#
    8. PHP
```
You can add as many polls as you want. After writing, check the syntax using:
```bash
mcqp check poll.mcq
```
You will see a message like this:
```txt
[INFO] @parser - found 2/poll and 0/question and 0/message
[INFO] @checker - Everything looks good.
```
:::note
You don't need to check every time - syntax checking is performed by default before sending to **Telegram**.
:::

To send the file to **Telegram**, use:
```bash
mcqp send poll.mcq
```
This command will check the syntax and then send the `poll.mcq` file to your bot on **Telegram**.

---
## Common Errors
Let's look at some common errors and their explanations.

### Commented Section Start
```mcq title="poll_errors.mcq" showLineNumbers
// p: Do you know Rust?
    a. Yes
    b. No
```
If we try to check this file `poll_errors.mcq`, it will throw an error in line 2
because the parser does not recognize what `a.` means.

### Section Ended with Comment
```mcq title="poll_errors.mcq" showLineNumbers
p: Do you know Rust?
    a. Yes
// in this comment we ended the poll section
    b. No
```
If we try to check this file `poll_errors.mcq`, it will throw an error in line 4
because the parser does not recognize what `b.` means. The poll section ends at the comment line,
and the parser treats `b. No` as a new section, but `b.` is not a valid keyword.

### Not an Error
```mcq title="poll_errors.mcq" showLineNumbers
p: Do you know Rust?
    a. Yes
    // This is NOT a comment! This is part of the options
    b. No
```
This will NOT throw an error because comments within the indentation block are treated as part of the options.

### Missing Poll Question
```mcq title="poll_errors.mcq" showLineNumbers
p: 
    a. Yes
    b. No
```
If we try to check this file `poll_errors.mcq`, it will throw an error in line 1
because the poll question length is 0, and it must be between 1 and 255 characters.

### No Options
```mcq title="poll_errors.mcq" showLineNumbers
p: Do you know Rust?
```
If we try to check this file `poll_errors.mcq`, it will throw an error in line 1
because there are no options, and you must have between 2 and 10 options.