---
sidebar_position: 1
---

# Welcome to MCQP
The `.mcq` file interpreter and a CLI tool for sending messages/polls to **Telegram**.
It is a fast and efficient tool to send bunch of messages/polls to **Telegram** using `.mcq` files,
the `.mcq` file it is a file type use to write the **MCQP** syntax and helps the user to fase write
bunch of messages and polls and send them to **Telegram**. The **MCQP** project came to help the students
or anyone who wants to send a set of questions or make exams on **Telegram**.

## Simple MCQP Syntax Example
Create file and name it `test.mcq` and then write to it:
```mcq title="test.mcq"
// config the questions/polls counter to start from 1
config:
    counter = 1

m:(
*Hello world* from `.mcq` file!
):endm

q: How are you today? <NOTE: You must be amazing 😁>
    Amazing *
    Good
    Bad
    Horrible
```

send the `test.mcq` file by using this command:
```bash
mcqp send test.mcq
```

## Getting Started
- Check out the [Installation](./installation.md) to set up **MCQP** on your system.
- [Create telegram bot](./create_telegram_bot.md) to set up **MCQL**.
- Config **MCQP CLI** to use your bot, see [MCQP config](./config_mcqp.md).
- Learn how to write and send **MCQP** file with our comprehensive [Guide](./mcqp_syntax/intro.md).

## License
**MCQP** is licensed under the **GNU General Public License Version 3** - see the [LICENSE](https://github.com/mcqp/mcqp/blob/main/LICENSE) file for details.

--- 
> Developed by [Mohaned Sherhan (Mr.x)](https://github.com/Mohaned2023)