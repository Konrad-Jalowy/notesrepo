let url = new URL('https://dummyjson.com/products/search');
url.searchParams.set("q", "Laptop");
//url.href:
//'https://dummyjson.com/products/search?q=Laptop'
fetch(url)
.then(res => res.json())
.then(res => res.products)
.then(console.log);