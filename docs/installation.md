---
sidebar_position: 1
---

# Installation

Follow the steps below to install **MCQP CLI** on your system based on your operating system.

## Linux
### using .deb package:
```sh
sudo dpkg -i mcqp.deb
```

### Using binary file:
1. Go to the [Release](https://github.com/mcqp/mcqp/releases) page and download the latest version of **MCQP CLI** for **Linux**.
2. Extract the downloaded file.
3. Move the **mcqp** binary to `/usr/local/bin`:
```sh
chmod +x mcqp/bin/mcqp
sudo mv mcqp/bin/mcqp /usr/local/bin
```

## Windows
1. Download the latest version of **MCQP CLI** for **Windows** from the [Release](https://github.com/mcqp/mcqp/releases) page.
2. Extract the contents and move the **MCQP folder** to your system drive (e.g., C:\mcqp).
3. Add the `bin` folder to your system's PATH:
   - Open Environment Variables settings:
     - Press `Win + X`, then select **System**.
     - Click on Advanced system settings > Environment Variables.
   - Under **System variables**, find and select `Path`, then click **Edit**.
   - Add the path to the `mcqp\bin` folder (e.g., C:\mcqp\bin).
   - Click **OK** to save changes.

## From Source
1. Install **Rust** and **Cargo** on your system.
2. Clone the repository:
```sh
git clone https://github.com/mcqp/mcqp.git
cd mcqp
```

3. Build the binary:
```sh
cargo build --release
```

4. Move `./target/release/mcqp` to your `bin` folder.
5. Verify the installation:
```sh
mcqp --version
```

Once completed, you should be able to run **mcqp** from the command line. 