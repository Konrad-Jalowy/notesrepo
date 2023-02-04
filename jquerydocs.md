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