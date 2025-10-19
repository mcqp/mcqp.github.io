---
sidebar_position: 1
title: Config Section
---

# Config Section
The config section is not sendable to **Telegram**, it is just a section to set and use some features
in the **MCQP CLI** (e.g. setting a counter for the polls). We currently support:
- **counter** is a count for the polls, use to set a number before the polls questions (e.g. `1.How are you today?`)
- **md_err** to enable the message markdown errors.

## Config Syntax
```mcq
   ╭────────── The start of the config section
   |
   |        ╭────────── The set value flag
╭─────╮     |   
config:     |  
    counter = 20 ────────── The feature value 
    ╰─────╯─────╮
╰──╯─────╮      |
         |      ╰───────── The feature name
         ╰───────── An indentation to identify the options
```
You must follow these rules:
1. Use a supported feature.
2. The features name must be lower case.
3. The feature must have a set flag (`=`) and a value.
4. Prefix the feature with indentation.
5. The section header must not contain spaces before `config:`.

## Example
Create a file named `config.mcq` (it must have the `.mcq` extension) and write:
```mcq title="config.mcq" showLineNumbers
// The md_err takes true/false, it basically enable 
// the messages markdown errors.
config:
    counter = 1
    md_err = true

// It will throw an error because the '*' not closed.
m:(
this will throw error *bold!
):endm

q: How are you today? <NOTE: You must be amazing 😁>
    Amazing *
    Good
    Bad
    Horrible

p: What is the fastest programming language
    1. Python
    2. JavaScript
    3. Rust 
    4. PHP
```
This will add a counter before each poll question and the question will send like this:
- `1.How are you today?`
- `2.What is the fastest programming language`

as you can see the counter is auto increment.
:::note
- The counter it will be added for any type of poll (e.g. `Single Choice Poll`, `Multichoice Poll` and `Question`)
- The config section will be used from where it is defined (if you need to skip some polls just defin the config section after them).
:::

check the syntax using:
```bash
mcqp check config.mcq
```
You will see a message like this:
```txt
[INFO] @parser - found 1/poll and 1/question and 0/message
[INFO] @checker - Everything looks good.
```
:::note
You don't need to check every time - syntax checking is performed by default before sending to **Telegram**.
:::

To send the file to **Telegram**, use:
```bash
mcqp send config.mcq
```
This command will check the syntax and then send the `config.mcq` file to your bot on **Telegram**.

---
## Common Errors
Let's look at some common errors and their explanations.

### No Value
```mcq title="config_error.mcq" showLineNumbers
config:
    counter = 

// or

config:
    counter
```
It will throw an error at line 2. because the parser expect a number after `=`.

### Unsupported Feature
```mcq title="config_error.mcq" showLineNumbers
config:
    any = 30 
```
It will throw an error at line 2. because the keyword `any` not a feature.

### Counter Negative Value
```mcq title="config_error.mcq" showLineNumbers
config:
    counter = -1
```
It will throw an error at line 2. because the counter value must be **non-negative**.
