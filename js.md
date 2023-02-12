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

- **ASI:** 
    - **Automatic Semicolon Intertion.** 
    - **Makes it possible to get away with skipping semicolon but semicolons SHOULD BE USED and SHOULD BE USED PROPERLY.** 
    - **Automatic semicolon insertion cannot destroy a code with proper semicolons but it can mess up a code without it.** 
    - **Simple example of something, that should return an object literal, but instead does "return ;" due to ASI because of lack of proper semicolons:**
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
- **rest parameter use example:**
```js
function sumAll(...nums){
    let cnt = 0;
    nums.forEach((num) => {
        cnt += num;
    });
    return cnt;
}
```
## Async:
### Fetch API:
- **Fetch API simple example:**
```js
let url = new URL("https://dummyjson.com/products/categories");
fetch(url)
.then(res => res.json())
.then(console.log);
```
- **Fetch response properties:**
    - **response.text()**
    - **response.json()**
    - **response.ok**
    - **response.status**
    - **response.headers.get(hname)**
- **Fetch api with search params properly:**
```js
let url = new URL('https://dummyjson.com/products/search');
url.searchParams.set("q", "Laptop");
//url.href:
//'https://dummyjson.com/products/search?q=Laptop'
fetch(url)
.then(res => res.json())
.then(res => res.products)
.then(console.log);
```
- **Example of passing response to another, custom function:**
```js
let url = new URL('https://dummyjson.com/products/search');
url.searchParams.set("q", "Laptop");
//url.href:
//'https://dummyjson.com/products/search?q=Laptop'
fetch(url)
.then(res => res.json())
.then(res => res.products)
.then(handleProducts);

function handleProducts(prodArr) {
    let docFrag = document.createDocumentFragment();
    let outerList = document.createElement("ul");
    prodArr.forEach( (el) => {
        let innerList = document.createElement("ul");
        let id = document.createElement("li");
        let title = document.createElement("li");
        let price = document.createElement("li");
        id.textContent = `ID: ${el.id}`;
        title.textContent = `Title: ${el.title} `;
        price.textContent = `Price: ${el.price}`;
        innerList.append(id);
        innerList.append(title);
        innerList.append(price);
        outerList.append(innerList);
    });
    docFrag.append(outerList);
    document.body.append(docFrag);
}
```