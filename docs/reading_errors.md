---
sidebar_position: 1
---

# How to Read the MCQP Errors
This guide will show you how to read the MCQP errors. The MCQP errors has been changed in the version 0.2.0,
this change make the syntax errors more readable. However the errors will be difficult to read in the first
time, But don't worry. We are here to help you.

## Example 1
You can see this example of the errors to start:
```txt
ERROR: The poll question does not exist.
   --> .\test.mcq:5:3
   |
 5 | p:
   |    ^ There is no question for the poll.

FIX: Add any question to the poll header.
   |
 5 | p: Poll question example
   |    +++++++++++++++++++++

[ERROR] @parser - Can not parse the file!
```
The idea is to simple, you have three main parts of the error:
1. The syntax error and there location, This basically refer to:
    ```txt
    ERROR: The poll question does not exist.
       --> .\test.mcq:5:3
       |
     5 | p:
       |    ^ There is no question for the poll.
    ```
    The line `ERROR: The poll question does not exist.` is the error description, the next
    line `--> .\test.mcq:5:3` refer to the file path (`.\test.mcq`), the error line number (`5`),
    and the offset (`3`). The next line `5 | p: ` refer to the actual line in the file, the next line
    `|    ^ There is no question for the poll.` point the exact error position in the line and describe
    the error. In the conclusion the error description will be like this:
    ```txt
       ╭─────────── The Type of help
       |                   ╭─────────── The Error description
       |                   |
    ╭─────╮╭───────────────────────────────╮ 
    ERROR: The poll question does not exist.
       --> .\test.mcq:5:3 ──────────────────────────╮
       |                                            |
     5 | p:                                         |─── ".\test.mcq" The file path
    ╰─╯|╰─╯ ^ There is no question for the poll.    |─── "5" The line number
     |   |  ╰──────────────────────────────────╯    ╰─── "3" The offset
     |   |                  ╰───────────╮
     |   ╰─────────── The actual line   |
     ╰─────────── The line number       ╰─────────── The exact descriptioin
    ```
2. The help tip, This basically refer to:
    ```txt
    FIX: Add any question to the poll header.
       |
     5 | p: Poll question example
       |    +++++++++++++++++++++
    ```
    The line `FIX: Add any question to the poll header.` is the tip description, the next
    line `5 | p: Poll question example` is the error line but with the fix, basically this 
    mean you need to add any text like `Poll question example` to solve the error, the 
    `+++++++++++++++++++++` refer to the position that has been changed. In the conclusion 
    the fix description will be like this:
    ```txt
      ╭─────────── The Type of help
      |                  ╭─────────── The Fix description
      |                  |
    ╭──╮╭───────────────────────────────────╮ 
    FIX: Add any question to the poll header.
       |
     5 | p: Poll question example ───────────╮
    ╰─╯|    +++++++++++++++++++++            |
     |      ╰───────────────────╯            ╰─────────── The line after the fix
     |               |
     |               ╰─────────── The position of the fix
     ╰─────────── The line number
    ```
3. The functional error, This basically refer to:
    ```txt
    [ERROR] @parser - Can not parse the file!
    ```
    This is just refer to the functional error, it mean that the parser cannot parse the file.
    ```txt
       ╭─────────── The Type of log
       |       ╭─────────── The log source
       |       |
    ╭─────╮ ╭─────╮
    [ERROR] @parser - Can not parse the file!
                      ╰─────────────────────╯
                                |
                                ╰─────────── The log
    ```
---
## Example 2
In this error:
```txt
ERROR: The config feature missing the assignment operator.
   --> .\test.mcq:3:12
   |
 3 |     counter
   |             ^ expected an assignment operator, found None.

FIX: Add the assignment operator followed by the value to assign the feature value.
   |
 3 |     counter  = <FEATURE-VALUE>
   |             ++++++++++++++++++

[ERROR] @parser - Can not parse the file!
```
This tells you that you need to add the an assignment operator followed by the feature value, 
the feature value in this case it is number, so the new line must be for example like this 
`counter = 10`.

In the end the idea is the same, but some times the forms are different. 
:::note
In some errors you will not get a FIX tip
:::