## Batch notes
- **argv in batch:**
```sh
@echo off
echo "Argument first: %1"
echo "Argument second: %2"
```
- **for range loop in batch:**
```sh
@echo off
for /L %%i in (1,1,10) do echo %%i
```