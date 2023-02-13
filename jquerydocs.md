## jquery docs
- **Ready function:**
```js
$( document ).ready(function() {
    console.log( "ready!" );
});
```
- **Addint/removing listeners and basic manipulation:**
```js
$( "#btn" ).on( "click", function() {
            $(this ).text("clicked");
            alert("clicked");
            $(this).attr("disabled", "true");
            $(this).off("click");
          });
```
- **Hide an element:**
```jsx
$("#btn").on("click", function()
        {
            $(this).hide();
        });
```
- **AJAX GET in jQuery with params:**
```js
$.ajax({
    type: "GET",
    url: "https://dummyjson.com/products/search",
    data: "q=Laptop",
   success: function(msg){
        let products = msg.products;
        products.forEach( (prod) => {
            let p = document.createElement('p');
            p.textContent = `Product Name: ${prod.title}. Price: ${prod.price}.`
            document.body.append(p);
        });
    }
    });
```
- **jQuery problem: poor readability:**
```js
$( "#btn" ).on( "click", function() {
    //AJAX CALL:
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/products/search",
        data: "q=Laptop",
       success: function(msg){
            let products = msg.products;
            products.forEach( (prod) => {
                let p = document.createElement('p');
                p.textContent = `Product Name: ${prod.title}. Price: ${prod.price}.`
                document.body.append(p);
            });
        }
        });
    //BUTTON:
    $(this ).text("clicked");
    $(this).attr("disabled", "true");
    $(this).off("click");
  });
```
- **jQuery $(this) binding:**
```js
$( "#btn" ).on( "click", function() {
    let thisBtn = $(this);
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/products/search",
        data: "q=Laptop",
       success: function(msg){
            thisBtn.text("clicked");
            thisBtn.attr("disabled", "true");
            thisBtn.off("click");
            let products = msg.products;
            products.forEach( (prod) => {
                let p = document.createElement('p');
                p.textContent = `Product Name: ${prod.title}. Price: ${prod.price}.`
                document.body.append(p);
            });
        }
        });
  });
  ```