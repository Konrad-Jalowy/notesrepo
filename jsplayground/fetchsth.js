let url = new URL("https://dummyjson.com/products/categories");
fetch(url)
.then(res => res.json())
.then(console.log);

        
