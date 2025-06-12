---
sidebar_position: 1
title: Introduction to MCQP Syntax
---

# Introduction to .mcq File Type
## What is a .mcq File?
A `.mcq` file is used to write **MCQP** syntax, which is a set of rules that helps users quickly create multiple messages and polls.

Users simply need to create a `.mcq` file, write their polls, messages, and other content, and the **MCQP** CLI will handle the rest.

## How to Send a .mcq File
To send a `.mcq` file, use the **MCQP CLI**. Use the `send` command to send the file, or the `check` command to verify the file syntax. Example:
```bash
mcqp send test.mcq

# Check the syntax
mcqp check test.mcq
```

## How MCQP Helps
**MCQP** helps students and anyone who needs to quickly create exams, polls, and messages to send to **Telegram**.

## Basic MCQP Syntax Instructions
The `.mcq` file is the **MCQP** file format - the **MCQP CLI** will not parse any other file type.

The **MCQP** syntax is divided into sections, where each section represents a type of message or poll. 
Each section starts with a keyword and has a body. The section body can be either indentation-based or block-based.

### Indentation-based Sections
Indentation-based sections start at the keyword and end at the start of another section, a comment, or an empty line. For example:
```mcq title="test.mcq"
// This is a poll section with single choice
p: How are you today?
    Amazing 
    Good
    Bad
    Horrible
```
The `//` indicates a comment that is not parsed. The `p:` is the type and start of the section. The poll choices are 
`Amazing`, `Good`, `Bad`, and `Horrible`. Each option must be on a new line and must be indented.

### Block-based Sections
Block-based sections start with a start-keyword and end with an end-keyword. For example:
```mcq title="test.mcq"
m:(
this is message!
    this line has indentation in the front
*this is a bold text*
):endm
```
The `m:(` is the type and start of the section, and `):endm` marks the end of the message section. Everything between 
the opening `m:(` and closing `):endm` will be parsed as-is.