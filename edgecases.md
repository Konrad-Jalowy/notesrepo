## Edge-cases examples:
### Case 1:
- **Will it complie?**
```java
while(false){
    break; //could be some really distracting stuff here
}
```
- **Short answer: NO**
- **while(false) in unreachable statement under any condition**
- **such unreachable statements are illegal in java.**
- **you can give some condition to while that might be false but not a condition that will always be false making the loop unreachable under any circumstances**
- **you can give conditions that will always be true though: famous while(true) loop**
- **illegal, unreachable condition:**
```java
while(1>10){
    break;
}
```
- **completely legal always-true condition:**
```java
while(1<10){
    break;
    }
```
