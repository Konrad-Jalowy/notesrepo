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