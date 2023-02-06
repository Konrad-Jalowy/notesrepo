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
## Groups
### Groups commands:
- **list groups in linux:**
```sh
groups
```
- **list groups all in a separate line:**
```sh
groups | tr ' ' '\n'
```
- **list groups, each in separate line, numbered:**
```sh
groups | tr ' ' '\n' | nl
```
- **show groups user kj is in:**
```sh
groups kj
```
### Groups in system:
- **/etc/group - groups stored there in a format:**
    - **group name**
    - **password (x)**
    - **GID (group ID)**
    - **list of usernames belonging to it**
- **get sudo group from /etc/group:**
```sh
cat /etc/group | grep sudo
```
- **get only user list from /etc/group for a group sudo:**
```sh
cat /etc/group | grep sudo | cut -d ":" -f4
```
### System groups granting priviledges:
- **lp - using printer**
- **lpadmin - managing printer**
- **scanner - using scanners**
- **audio - self descriptive**
- **video - self descriptive**
- **floppy - self descriptive**
- **sudo - executing sudo commands**