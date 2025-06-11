---
sidebar_position: 1
---

# Installation

Follow the steps below to install **MCQL CLI** on your system based on your operating system.

## Linux
### using .deb package:
```sh
sudo dpkg -i mcqp.deb
```

### using bin file:
- Go to the [Release](https://github.com/mcqp/mcqp/releases) page and download the latest version of **MCQP CLI** for **Linux**.
- Decompress the file.
- Move the **mcqp** bin to `/usr/local/bin`:
```sh
chmod +x mcqp/bin/mcqp
sudo mv mcqp/bin/cmqp /usr/local/bin
```

## Windows
- Download the latest version of **MCQP CLI** for **Windows** from the [Release](https://github.com/mcqp/mcqp/releases) page.
- Extract the contents and move the **MCQP folder** to your system drive (e.g., C:\mcqp).
- Add the `bin` folder to your system's PATH:
  - Open Environment Variables settings:
    - Press `Win + X`, then select **System**.
    - Click on Advanced system settings > Environment Variables.
  - Under **System variables**, find and select `Path`, then click **Edit**.
  - Add the path to the `mcqp\bin` folder (e.g., C:\mcqp\bin).
  - Click **OK** to save changes.

## From Source
- You need to install **Rust** and **Cargo** on your system.
- Clone the repo:
```sh
git clone https://github.com/mcqp/mcqp.git
cd mcqp
```

- Build the binary
```sh
cargo build --release
```

- Move `./target/release/mcqp` to your `bin` folder.
- Try to run:
```sh
mcqp --version
```

Once this is done, you should be able to run **mcqp** from the command line. 