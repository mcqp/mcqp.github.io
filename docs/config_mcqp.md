---
sidebar_position: 1
---

# Config MCQP CLI
To use your bot you must config the **MCQP CLI** by setting up the bot token and chat-id.
:::note
You do not need to config the **MCQP CLI** when new update come, 
just if you need to change the bot or the chat then config it again.
:::

## Config
1. Run **mcqp CLI** with `config` command:
    ```bash
    mcqp config
    ```
    - you will see message like this:
    ```
    Enter the token:
    ```
2. Enter your bot API token.
    - you will see message like this:
    ```
    ----- Bot Informations:
    ID: <BOT-ID>
    Name: <BOT-NAME>
    Username: <BOT-USERNAME>
    Please send any text message to the bot and then press enter...
    ```
3. Check the bot information and then go to your bot.
4. Press **Start** button in your bot.
5. Enter any message then send it to the bot.
6. Back to **MCQP CLI** and press enter.
    - you will see bunch of chats like this: 
    ```
    ----- Chats:
    Chat ID: <CHAT-ID>
    Name: <CHAT-NAME>
    Username: <CHAT-USERNAME>
    Message: <THE-MESSAGE>
    Chat Type: <CHAT-TYPE>

    ...

    Based on the chats enter your chat-id:
    ```
    :::note
    if there is no chats just check if you send the message to the correct bot, 
    if it is the correct bot and you not see the chats just send message in 
    github discussions at https://github.com/orgs/mcqp/discussions and we will
    help you.
    :::
7. Find the message you send and then enter the **CHAT-ID** for it.
    - if you see message like this:
    ```
    [INFO] @save-config - Configurations saved successfully.
    ```
    This means that the configuration was completed successfully.

---
## Get the config file
If you need to see the config file you will find it at:
|Platform | Value                                                          | Example                                                          |
| ------- | -------------------------------------------------------------- | ---------------------------------------------------------------- |
| Linux   | `$XDG_DATA_HOME` or `$HOME`/.local/share/mcqp/data/config.json | /home/mohaned/.local/share/mcqp/data/config.json                 |
| macOS   | `$HOME`/Library/Application Support/mcqp/data/config.json      | /Users/Mohaned/Library/Application Support/mcqp/data/config.json |
| Windows | `{FOLDERID_RoamingAppData}`\mcqp\data\config.json              | C:\Users\Mohaned\AppData\Roaming\mcqp\data\config.json           |
