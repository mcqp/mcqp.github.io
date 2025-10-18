---
sidebar_position: 1
title: Create Message
---

# Create Message
The message section has simple **Telegram Markdown v1** parser this means thet you can use some
markdown like:
- \* \* for bold text (e.g. **bold**)
- \_ \_ for italic text (e.g. _italic_)
- \` \` for copy text (e.g. `copy`)
- \``` \``` for code block
- \[text\]\(URL\) for links (e.g. [example](https://example.com))
:::note
We can't show the code block example because we deal with markdown files on this website.
:::

## Message Syntax
To send messages to **Telegram**, use the `m:(` keyword to define the start of the section 
and the `):endm` keyword to define the end of the message section. Let's explain the syntax:

```mcq
  ╭────────── The start of the message section
  |
  |            ╭────────── Bold text
╭──╮           |                        ╭────────── Italic text
m:(       ╭────────╮                    |      ╭────────── Click to copy text
This is a *markdown* message            |      |               ╮
                                    ╭──────╮   |               |
you can use this command to run the _checks_:  |               |
`mcqp check ./example/message.mcq`             |               |────────── The message
╰────────────────────────────────╯─────────────╯               |
you can download the new version of *mcqp*                     |
from the [release page](https://github.com/mcqp/mcqp/releases) ╯ 
):endm   ╰───────────────────────────────────────────────────╯
╰─────╯─────╮                    |
            |                    ╰───────── Link as text
            |
            ╰───────── The end of the message section
```
You must follow these rules:
1. The section start must not contain spaces before `m:(`.
2. The start `m:(` and the end `):endm` must be in a different lines.
3. The message length must be at least 1 character long.

---
## Example
Create a file named `message.mcq` (it must have the `.mcq` extension) and write:
```mcq title="message.mcq" showLineNumbers
m:(
*Hello world* from `.mcq` file!
):endm

m:(
This is a *markdown* message

you can use this command to run the _checks_: `mcqp check ./example/message.mcq`

you can download the new version of *mcqp* from [release page](https://github.com/mcqp/mcqp/releases)
):endm

```
You can add as many messags as you want. After writing, check the syntax using:
```bash
mcqp check message.mcq
```
You will see a message like this:
```txt
[INFO] @parser - found 0/poll and 0/question and 2/message
[INFO] @checker - Everything looks good.
```
:::note
You don't need to check every time - syntax checking is performed by default before sending to **Telegram**.
:::

To send the file to **Telegram**, use:
```bash
mcqp send message.mcq
```
This command will check the syntax and then send the `message.mcq` file to your bot on **Telegram**.

---
## Common Errors
Let's look at some common errors and their explanations.

### Start and End in Same Line
```mcq title="message_error.mcq" showLineNumbers
m:( *Hello world* from .mcq file! ):endm
```
It will throw error at line 1. because the parser will skip what is after `m:(` this means it will not see
the `*Hello world* from .mcq file! ):endm`.

### Empty Message
```mcq title="message_error.mcq" showLineNumbers
m:(

):endm
```
It will throw error at line 1. because the message length is 0.

### Escape a Valid Markdown
```mcq title="message_error.mcq" showLineNumbers
m:( 
\*Hello world* from .mcq file!
):endm
```
It will close the `*` by addin new `*` in the end of message, the message will be like this
`\*Hello world* from .mcq file!*`