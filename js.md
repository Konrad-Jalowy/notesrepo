# JS notes
## Basics
- **undefined - type for variables without assigned value**
```js
let x;
console.log(x); //undefined
console.log(typeof x); // undefined
```
- **null - just like in other programming languages null/nil/None... But JS has weird parts:**
```js
let x = null;
let y;
console.log(x == y); //true if '=='
console.log( x === y); //false..
```
- **stupid JS behavior with typeof null:**
```js
console.log(typeof null); //object
```
- **var:**
    - **hoisted**
    - **polluting global namespace**
    - **can be redeclared**
    - **problems with loops combined with intervals**
    - **all other sorts of problems and misconceptions compared to let and const. do not use**

- **ASI - Automatic Semicolon Intertion. Makes it possible to get away with skipping semicolon but semicolons SHOULD BE USED and SHOULD BE USED PROPERLY. Automatic semicolon insertion cannot destroy a code with proper semicolons but it can mess up a code without it. Simple example of something, that should return an object literal, but instead does "return ;" due to ASI because of lack of proper semicolons:**
```js
function sth(somePara) {
    //DO STH
    return //because of newline + lack of proper semicolons semicolon goes HERE makes the rest of the function UNREACHABLE!!!
    {
        key1: 123,
        key2: "Something"
    }
}
```