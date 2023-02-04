## Batch notes
- **argv in batch:**
```sh
@echo off
echo "Argument first: %1"
echo "Argument second: %2"
```
- **for range loop in batch:**
```bat
@echo off
for /L %%i in (1,1,10) do echo %%i
```
- **for loop over files in given path:**
```bat
@echo off
FOR /R ".\" %%G in ("*") DO (
 echo %%G )
```
- **Example: add files and commit:**
```bat
@echo off
FOR /R ".\" %%G in ("*") DO (
 echo %%G
git add %%G )
git commit -m "files added"
git push
```
- **Append text to a file in batch in a loop**
```bat
@echo off
for /l %%i in (1,1,10) do (
    echo %%i >> text.txt   
)
```
