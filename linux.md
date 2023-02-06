## Linux notes
### Commands notes
- **Find where vscode is installed - which command:**
```sh
which code
```
- **whereis command:**
```sh
whereis code
```
- **show hostname/nodename:**
```sh
uname -n
```
- **show processor info:**
```sh
uname -p
```
- **show all system information:**
```sh
uname -a
```
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
- **find path of a file .bashrc:**
```sh
readlink -f .bashrc
```
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
- **staff - allows users to add local modifications to the system (/usr/local) without needing root privileges**
- **shadow - /etc/shadow readable by them**
- **disk - root access to disk**
- **cdrom - self descriptive**
- **fax - self descriptive**
- **tty - TTY devices are owned by this group. This is used by write and wall to enable them to write to other people's TTYs, but it is not intended to be used directly.**

## Bash Scripting