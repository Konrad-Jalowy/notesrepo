# ilovepython
## **Notes copied from ilovepython mini-project**
## Notes on this project:
- **check if you have venv(linux):**
```sh
virtualenv --version
```
- **insall pip and venv in necessary (ubuntu):**
```sh
sudo apt-get install python-pip
```
```sh
pip install virtualenv
```
- **create venv (linux):**
```sh
virtualenv virtualenv_name
```
- **activate venv (linux):**
```sh
source virtualenv_name/bin/activate
```
- **deactivate venv:**
```sh
deactivate
```
- **install argparse library:**
```sh
pip install argparse
```
- **create argument --do**
```py
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--do', type=str, required=False)
args = parser.parse_args()
```
- **use argument do in code**
```py
if args.do is not None:
    command = args.do
    mainloop(command)
else:
    mainloop()
```
- **use argument do in shell:**
```sh
python main.py --do="help"
```
```sh
python main.py --do=help
```
```sh
python main.py --do help
```
```sh
python main.py --do "help"
```
- **simple correction of user input:**
```py
explanations = {
    "/bin" : "stores essential command-line utilities and binaries",
    "/boot" : "stores files to boot your linux system",
    "/dev" : "hardware/software drivers",
    "/etc" : "basic conf files",
    "/home" : "home dirs for the users",
    "/lib": "shared libraries",
    "/media": "mount points for CD, floppy and other removable media",
    "/mnt": "temp mount for filesystem",
    "/proc": "kernel information",
    "/usr" : "readonly stuff accessible to users",
    "/root" : "root directory",
    "/sys" : "info about devices",
    "/sbin" : "binaries for boot, root etc... essential binaries in /bin",
    "/tmp" : "self-decriptive" 
}
def get_description(ipt):
    if not ipt.startswith("/"):
        ipt = "/" + ipt
    if ipt not in explanations:
        print("Unknown location")
    else:
        print(ipt + ": " + explanations[ipt])
```
- **how to iterate over python dictionary with keys, values and indexes:**
```py
def print_all():
    print("Available locations:")
    for idx, (key, value) in enumerate(explanations.items()):
        print(f"{idx+1}: {key} - {value}")
```
```py
commands = {
    "q/Q/quit": "Quit the program",
    "h/H/help": "Show help",
    "a/A/all" : "List All",
    "/location_name" : "Show description"
}
def print_help():
    print("Available commands:")
    for idx, (key, value) in enumerate(commands.items()):
        print(f"{idx+1}: {key} - {value}")
```
- **python match case (with | operator) - great new Python feature (get new Python!!!!):**
```py
def match_command(command):
    match command.lower():
        case "q" | "quit":
            return -1
        case "all" | "a":
            print_all()
        case "help" | "h":
            print_help()
        case other:
            get_description(command)
```
- **Note to myself: I learned today that you cannot break out of the loop from within function called inside that loop. But you can return some value or change some flag to break out of it. Here is mainloop in this mini-project as for now:**
```py
def mainloop(arg=None):
    while True:
        if arg:
            flag = match_command(arg)
            arg = None
            if flag == -1:
                print("Bye")
                break
        else:
            command = input("What do you want me to explain? > ")
            flag = match_command(command)
            if flag == -1:
                print("Bye")
                break
```