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
### Case 2:
- **What will this function return?**
```js
function test(){
    return
    {
        name: "KJ"
    }
}
let obj1 = test();
```
- **Short answer: undefined**
- **This code is not executed as programmer intended because:**
    - **semicolon not used**
    - **newline between return and object literal**
    - **ASI (Automatic Semicolon Insertion) makes the whole block unreachable by adding semicolon after return before obj literal**
    - **return; returns undefined in JavaScript**
- **Will it be okay?**
```js
function test2(){
    return
    {
        name: "KJ"
    };
}

let obj2 = test2();
console.log(obj2.name);
```
- **as for now: NO. ASI still gets stupid because of the newline**
- **this is fine though, semicolon or not:**
```js
function test3(){
    return{
        name: "KJ"
    }
}
let obj3 = test3();
console.log(obj3.name);
```
### Case 3:
- **Will the echoed username be capitalized or not?**
```php
$username = "uSERNAME";
ucfirst($username);
echo $username;
```
- **Short answer: NO**
- **ucfirst method doesn not modify the contents of the variable. It simply returns a new string that here goes nowhere**

### Case 4:
- **Will the output of puts and echo in the examples below be the same or different (if so, how)?**
```php
$username = "uSERNAME";
echo ucfirst($username);
```
```rb
username = "uSERNAME"
puts username.capitalize
```
- **Short answer: NO**
- **PHP will echo USERNAME making the first letter uppercase, as the method name suggests**
- **Ruby will capitalize and puts will output Username - all letters must be lowercase, except the first, that must be capitalized**
- **A way to create capitalize method in PHP:**
```php
$username = "uSERNAME";
function capitalize($str) {
	return ucfirst(strtolower($str));
}
echo capitalize($username);
//Username
```