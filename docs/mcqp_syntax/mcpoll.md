---
sidebar_position: 1
title: Create Multichoice Poll
---

# Create Multichoice Poll
A multichoice poll is a type of poll that allows users to select muttiple option. 
This type of poll does not include a note or correct answer.

## MCPoll Syntax
To send multichoice polls to **Telegram**, use the `mcp:` keyword to define the multichoice poll section. Let's explain the syntax:
```mcq
  ╭────────── The start of the multichoice poll section
  |          ╭────────── The poll question
  |          |
╭──╮ ╭────────────────╮
mcp: How are you today?
    Amazing    ╮
    Good       |
    Bad        |────────── The poll options
    Horrible   |
               ╯ 
╰──╯─────╮
         |
         ╰───────── An indentation to identify the options
  
```
You must follow these rules (similar to [single poll syntax rules](./poll.md#poll-syntax)):
1. Add a new line between sections.
2. The poll question length must be between 1 and 255 characters.
3. Each option length must be between 1 and 100 characters.
4. The number of options must be between 1 and 10.
5. Add options in the indentation block.
6. The section header must not contain spaces before `mcp:`.

---
## Example
Create a file named `mcpoll.mcq` (it must have the `.mcq` extension) and write:
```mcq title="mcpoll.mcq"
mcp: How are you today?
    Amazing
    Good
    Bad
    Horrible

mcp: What is your favorite programming language
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
mcqp check mcpoll.mcq
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
mcqp send mcpoll.mcq
```
This command will check the syntax and then send the `mcpoll.mcq` file to your bot on **Telegram**.

---
## Common Errors
Since it is similar to the [single poll](./poll.md), it has the same [syntax rules](./poll.md#poll-syntax) as
well as the same [common errors](./poll.md#common-errors).