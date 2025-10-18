---
sidebar_position: 1
title: Create Question
---

# Create Question
A question is a type of poll that only allows users to select one option. 
This type of poll include a note and correct answer.

## Question Syntax
To send question to **Telegram**, use the `q:` keyword to define the question section. Let's explain the syntax:
```mcq
╭────────── The start of the question section
|          ╭────────── The question
|          |                           ╭────────── The question note
|          |                           |
|          |                           |
|  ╭────────────────╮        ╭────────────────────╮
q: How are you today? <NOTE: You must be amazing 😁 >
    Amazing   *   ╮   ╰────╯──╮                     |
    Good     ╰─╯  |           ╰─────────────────╮   |
    Bad       |   |────────── The poll options  |   ╰───────── The end of the note block
    Horrible  |   |                             |
              |   ╯                             ╰───────── The start of the note block
╰──╯─────╮    ╰───────── The correct answer
         |
         ╰───────── An indentation to identify the options
  
```
You must follow these rules:
1. Add a new line between sections.
2. To add a note you must follow these rules:
    - Note is optional.
    - Note must be in the question line.
    - Note must be in the end of the line.
    - Note must start with `<NOTE:` upper case.
    - Note must ends with `>`.
    - The note length must be between 1 and 200 characters.
3. You must select a correct answer using `*` in the end of the option.
4. If you add more then one correct answer it will use the last correct answer.
5. The question length must be between 1 and 255 characters.
6. Each option length must be between 1 and 100 characters.
7. The number of options must be between 2 and 10.
8. Prefix the options with indentation.
9. The section header must not contain spaces before `q:`.

---
## Example
Create a file named `question.mcq` (it must have the `.mcq` extension) and write:
```mcq title="question.mcq" showLineNumbers
q: How are you today? <NOTE: You must be amazing 😁>
    Amazing *
    Good
    Bad
    Horrible

q: What is the fastest programming language <NOTE: Of course it is Rust>
    1. Python
    2. JavaScript
    3. Rust *
    4. PHP
```
You can add as many questions as you want. After writing, check the syntax using:
```bash
mcqp check question.mcq
```
You will see a message like this:
```txt
[INFO] @parser - found 0/poll and 2/question and 0/message
[INFO] @checker - Everything looks good.
```
:::note
You don't need to check every time - syntax checking is performed by default before sending to **Telegram**.
:::

To send the file to **Telegram**, use:
```bash
mcqp send question.mcq
```
This command will check the syntax and then send the `question.mcq` file to your bot on **Telegram**.

---
## Common Errors
Let's look at some common errors and their explanations.

### No Correct Answer
```mcq title="question_error.mcq" showLineNumbers
q: How are you today?
    Amazing 
    Good
    Bad
    Horrible
```
It will throw error at line 5. because we did not select the correct answer.

### Length of the Note
```mcq title="question_error.mcq" showLineNumbers
q: How are you today? <NOTE: >
    Amazing *
    Good
    Bad
    Horrible
```
It will throw error at line 1. because the length of the note must be between 1 and 200 characters.

### Note is Not in the End
```mcq title="question_error.mcq" showLineNumbers
q: How are you today? <NOTE: > I think you are good!
    Amazing 
    Good *
    Bad
    Horrible
```
It will NOT throw an error, It will parse the note as a part of the question and the question will be 
like this `How are you today? <NOTE: > I think you are good!`. because the note is not in the end.

### Select Many Correct Answers
```mcq title="question_error.mcq" showLineNumbers
q: How are you today?
    Amazing *
    Good *
    Bad *
    Horrible
```
It will NOT throw an error, It will parse the options and set the end correct answer as the correct option
(`Bad`). because we select more then one correct answer.
