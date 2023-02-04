## Nmap notes
- **nmap your localhost:**
```sh
nmap localhost
```
- **nmap for OS detection:**
```sh
nmap -O IP
```
- **check only ports from 0-500:**
```sh
nmap -p 0-500 IP
``` 
- **specifying name rather than port:**
```sh
nmap -p smtp IP
```