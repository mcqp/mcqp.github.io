---
sidebar_position: 1
title: Create Single Choice Poll
---

# Create Single Choice Poll
What is a single choice poll? it is a type of poll that only allows you to choose one option. 
This type of poll does not have a `note` or a correct answer.

## Poll Syntax
To send polls to telegram use the `p:` keyword to defined the poll section. Lat's start explaining
the syntax:
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
         ╰───────── An indentaion to identify the options
  
```
You must follow these rules:
1. You must add new line between the sections.
2. The poll question length must be in range of 1 to 255 character.
3. The single opstion length must be in range of 1 to 100 character.
4. The number of options must be in range of 1 to 10.
5. You must add the opstions in the indentaion block.
6. The header of the section must not contain a space in the front (before `p:`).

---
## Example
Create file and name it `poll.mcq` (it must be `.mcq`), write to it:
```mcq title="poll.mcq"
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
    5. JavaScrypt
    6. Ruby
    7. C#
    8. PHP
```
You can add as much as you want of polls. After you finish writing lat's check the syntax by using
```bash
mcqp check poll.mcq
```
You will see message like this:
```txt
[INFO] @parser - found 2/poll and 0/question and 0/message
[INFO] @checker - Everything looks good.
```
:::note
You do not need to check every time, it is by default checked before sending it to **Telegram**.
:::

Now you need to send the file to **Telegram** by using:
```bash
mcqp send poll.mcq
```
This command will check and then send the `poll.mcq` to your bot at **Telegram**.

---
## Create Errors
After we see the basic syntax for the polls lat's do some erros and explain them.

### forget the new line
```mcq title="poll_errors.mcq"
p: Do you know Rust?
    a. Yes
    b. No
p: Do you know Python?
    a. Yes
    b. No
```
If we try to check this file `poll_errors.mcq` it will throw an error in the section 2.
This because we did not separate the sections with a new line.

### comment out the start of the section
```mcq title="poll_errors.mcq"
// p: Do you know Rust?
    a. Yes
    b. No
```
If we try to check this file `poll_errors.mcq` it will throw an error in the line number 2.
This because the parse does not know what is the word `a.` mean.

### end the section with a comment
```mcq title="poll_errors.mcq"
p: Do you know Rust?
    a. Yes
// in this comment we ended the poll section
    b. No
```
If we try to check this file `poll_errors.mcq` it will throw an error in the line number 4.
This because the parse does not know what is the word `b.` mean. it just ends the poll section
in the comment line and parse the line `b. No` as a new section, but the `b.` is not a keyword!

### NOT an error
```mcq title="poll_errors.mcq"
p: Do you know Rust?
    a. Yes
    // This is NOT a comment!, This part of the options
    b. No
```
This will NOT throw an error because the comment in the comment with indentaion will be part of
the options.

### no poll question
```mcq title="poll_errors.mcq"
p: 
    a. Yes
    b. No
```
If we try to check this file `poll_errors.mcq` it will throw an error in the line number 1.
This because the length of the poll question is 0 and we must have the length in range of 
1 to 255.

### no options
```mcq title="poll_errors.mcq"
p: Do you know Rust?
```
If we try to check this file `poll_errors.mcq` it will throw an error in the line number 1.
This because the number of options is 0 and you must have it in range of 1 to 10.