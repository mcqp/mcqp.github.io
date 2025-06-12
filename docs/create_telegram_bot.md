---
sidebar_position: 1
---

# Create a Telegram Bot
You need to create a **Telegram bot** to send messages through **Telegram**. We'll use [**BotFather**](https://t.me/BotFather) to create one.

## Create a New Bot
1. Go to **BotFather** at https://t.me/BotFather.
2. Press the **Start** button.
3. Enter `/newbot` without spaces and send it.
    - You will see a message like this:
    ```txt
    Alright, a new bot. How are we going to call it? Please choose a name for your bot.
    ```
4. Enter a bot name and send it.
    - You will see a message like this:
    ```txt
    Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.
    ```
5. Enter a bot username ending with `bot` (e.g., `test_bot` or `testbot`).
    :::note
    If you see a message like this:
    ```txt
    Sorry, this username is already taken. Please try something different.
    ```
    Try another username.
    :::
    - You will see a message like this: 
    ```txt
    Done! Congratulations on your new bot. You will find it at t.me/<BOT-USERNAME>. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

    Use this token to access the HTTP API:
    <BOT-ID>:<BOT-HASH>
    Keep your token secure and store it safely, it can be used by anyone to control your bot.

    For a description of the Bot API, see this page: https://core.telegram.org/bots/api
    ```
6. Copy the API token and save it in a secure location.
    :::warning
    Your API token is like a password for your bot.
    Please do NOT share it with anyone.
    :::

---
## Use an Existing Bot
1. Go to **BotFather** at https://t.me/BotFather.
2. Enter `/token` without spaces and send it.
    - You will see buttons with your bot names
    - You will see a message like this:
    ```txt
    Choose a bot to generate a new token.
    ```
3. Click on your bot's button.
    - You will see a message like this: 
    ```txt
    You can use this token to access HTTP API:
    <BOT-ID>:<BOT-HASH>

    For a description of the Bot API, see this page: https://core.telegram.org/bots/api
    ```
4. Copy the API token and save it in a secure location.
    :::warning
    Your API token is like a password for your bot.
    Please do NOT share it with anyone.
    :::