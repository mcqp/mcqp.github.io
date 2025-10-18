---
sidebar_position: 1
---

# Welcome to MCQP
MCQP is a `.mcq` file interpreter and CLI tool for sending messages and polls to **Telegram**.
It provides a fast and efficient way to send multiple messages and polls to **Telegram** using `.mcq` files.
The `.mcq` file format is designed to write **MCQP** syntax, helping users quickly create and send
multiple messages and polls to **Telegram**. The **MCQP** project was created to assist students
and anyone who needs to send sets of questions or create exams on **Telegram**.

## Simple MCQP Syntax Example
Create a file named `test.mcq` and add the following content:
```mcq title="test.mcq" showLineNumbers
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

Send the `test.mcq` file using this command:
```bash
mcqp send test.mcq
```

## Getting Started
- Check out the [Installation](./installation.md) guide to set up **MCQP** on your system.
- [Create a Telegram bot](./create_telegram_bot.md) to set up **MCQP**.
- Configure **MCQP CLI** to use your bot by following the [MCQP configuration](./config_mcqp.md) guide.
- Learn how to write and send **MCQP** files with our comprehensive [Guide](./mcqp_syntax/intro.md).

## License
**MCQP** is licensed under the **GNU General Public License Version 3** - see the [LICENSE](https://github.com/mcqp/mcqp/blob/main/LICENSE) file for details.

--- 
> Developed by [Mohaned Sherhan (Mr.x)](https://github.com/Mohaned2023)