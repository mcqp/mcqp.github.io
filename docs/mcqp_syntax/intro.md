---
sidebar_position: 1
title: Intro to MCQP Syntax
---

# Intro to .mcq file type
## What is .mcq file
It is type of file use to write the **MCQP** syntax, the **MCQP** syntax is a set of rules that
helps the user to create many messages and polls quickly.

All the user needs to do is create `.mcq` file and write all the polls, messages, etc, and the **MCQP**
CLI will take care of the rest.

## How to send .mcq file
To send `.mcq` file use the **MCQP CLI**. Use the command `send` to send the file, or use the command
`check` to check the file syntax. Example:
```bash
mcqp send test.mcq

# Check the syntax
mcqp check test.mcq
```

## MCQP helps
**MCQP** helps the student or anyone needs to quickly create exams or bunch of polls and messages and send them to **Telegram**.

## Basic MCQP syntax instructions
The `.mcq` file is the **MCQP** file, the **MCQP CLI** will not parse any other file.

The **MCQP** syntax divided into section, every section is type of message or poll. 
Every section start with keyword and have a body, the section body can be a indentaion 
based or a block based. The indentaion based section start at the keyword and end in start
of another section or comment or just empty line, for example:
```mcq title="test.mcq"
// This is a poll section with single choice
p: How are you today?
    Amazing 
    Good
    Bad
    Horrible
```
The `\\` is a comment does not parse. The `p:` is the type and the start of the section, The choices of the poll are 
`Amazing`, `Good`, `Bad` and `Horrible`, every opstion must be in new line and must have indentaion in the front.

The block based section start at the start-keyword and ends at the end-keyword, for example:
```mcq title="test.mcq"
m:(
this is message!
    this line has indentaion in the front
*this is a bold text*
):endm
```
The `m:(` is the type and the start of the section, the `):endm` is the end of the message section. Any thing in the
open `m:(` and the close `):endm` will be parse as it is.