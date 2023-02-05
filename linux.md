## Linux notes
### Commands notes
- **Brace Expansion - not working on windows even though i have touch installed :/**
```sh
touch my-file-{1..30}.txt
```
- **Brace expanison for a set of extensions:**
```sh
touch component{.js, test.js, .css}
```
- **Update and upgrade Ubuntu no prompts:**
```sh
sudo apt update && sudo apt upgrade -y
```
- **show disk free space (in human readable form):**
```sh
df -h
```
- **show umask (default permissions for newly created files) as a symbolic value:**
```sh
umask -S
```
- **change permissions for user, group and others for read, write and execute of a file:**
```sh
chmod 777 somefile.txt
```
- **Numbers and their meaning:**
    - **4 - read**
    - **2 - write**
    - **1 - execute**
