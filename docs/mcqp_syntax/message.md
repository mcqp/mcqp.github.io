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
:::warning
The **Telegram Markdown v1** parser is simple, it has many issues. If you send a file
and the **MCQP CLI** throw an error in the message section (e.g. `Can NOT send the message!`)
please check the syntax of the markdown. The **MCQP CLI** by default escape any simple error
in the markdown syntax (e.g. if you forget to close the `*`, `_` etc), it can't deal with 
complex issues (e.g. if you have nested square bracket `[[[example(https://example.com)`).
:::

You must follow these rules:
1. Add a new line between sections.
2. The section start must not contain spaces before `m:(`.
3. The start `m:(` and the end `):endm` must be in a different lines.
4. The message length must be at least 1 character long.

---
## Example
Create a file named `message.mcq` (it must have the `.mcq` extension) and write:
```mcq title="message.mcq"
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
```mcq title="message_error.mcq"
m:( *Hello world* from .mcq file! ):endm
```
It will throw error at line 2. because the parser will skip what is after `m:(` this means it will not see
the `*Hello world* from .mcq file! ):endm`.

### Empty Message
```mcq title="message_error.mcq"
m:(

):endm
```
It will throw error at line 3. because the message length is 0.

### Escape a Valid Markdown
```mcq title="message_error.mcq"
m:( 
\*Hello world* from .mcq file!
):endm
```
It will throw error, and it will not send the message. because the parser sees it as a valid syntax, but in 
real the message send to **Telegram API** like this `\*Hello world* from .mcq file!` the **Telegram Markdown Parser**
will throw an error because the `*` did not closed. to solve this error, escape the closed start 
(e.g. `\*Hello world\* from .mcq file!`).

### Nested Square Bracket Error
```mcq title="message_error.mcq"
m:( 
Hello world* from .mcq file!
[[release page(https://github.com/mcqp/mcqp/releases)
):endm
```
It will throw error, and it will not send the message. because the parser can't escape the nested square bracket (`[[`),
it can escape one square bracket (e.g. `[release page`). to solve this error, escape the first square bracket 
(e.g. `\[[release page`) and the **MCQP** parser will escape the last one (e.g. `\[\[release page`).