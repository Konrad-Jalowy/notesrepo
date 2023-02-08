## Linux notes
### Commands notes
- **List all files with .sh extension in current directory:**
```sh
ls | grep -E ".*\.sh$"
```
```sh
find . -name "*.sh"
```
- **Create prompt2.sh file with contents of prompt.sh file:**
```sh
cat prompt.sh >> prompt2.sh
```
- **Find where vscode is installed - which command:**
```sh
which code
```
- **whereis command:**
```sh
whereis code
```
- **find .bashrc file/files path:**
```sh
locate .bashrc
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
### Control structures and examples:
- **shebang - #!/usr/bin/bash**
- **export MSG="Hello World" - create a variable with some data**
- **echo $MSG - use variable in echo command**
- **example of a simple helloworld.sh script:**
```sh
#!/usr/bin/bash
export MSG="Hello World"
echo $MSG
```
- **dot operator - evaluate commands in the current context**
```sh
. helloworld.sh
```
- **If[cond];then-fi block - self-descriptive**
- **If [-f path] - if file exists**
- **If [-r path] - if file exists and is readable**
- **Example: if file .bash_aliases exists then execute its commands:**
```sh
if [ -f ~/.bash_aliases ]; then 
    . ~/.bash_aliases
fi
```
- **Example: if a file exists, call it:**
```sh
#!/usr/bin/bash
if [ -f helloworld.sh ]; then
. helloworld.sh
fi
```
- **Example: check if .bash_aliases is missing:**
```sh
#!/usr/bin/bash
if [ ! -f ~/.bash_aliases ]; then
	echo "Bash aliases doesnt exist!"
else
	echo "Bash aliases ok!"
fi
```
- **read -p "Prompt msg" variable -read prompt from user and save it**
- **read -s variable [no message with -s! you must echo it yourself] - read secure for passwords**
- **case $variable in [yY]* ) commands;; esac - switch for bash**
- **function_name() { [function body]} - declare function in bash**
- **function_name - call function in bash**
- **if [$var == "string" ]; - comparing strings in bash:**
- **Example: defining and calling a function:**
```sh
#!/usr/bin/bash

say_hello() {
echo "hello world!"
} 
say_hello
```
- **Example: using functions and other previous knowledge to check for bash_aliases and create if necessary:**
```sh
create_file(){
touch ~/.bash_aliases
echo "File created"
main
}

ask_pswd() { 
echo "Give secret password!"
read -s pswd
if [ $pswd == "pswd" ]; then
	create_file
else
	echo "wrong password!"
fi
}

ask(){
echo "File not found. Would you like to create?"
read -p "Y/N" choice
case $choice in
[yY])
ask_pswd;;
[nN])
echo "File not created. Bye!";;
*)
echo "Command not found. Bye!";;
esac
}

main() { 
if [ ! -f ~/.bash_aliases ]; then
	ask
else
	echo "File present!"
fi
}

main
```
