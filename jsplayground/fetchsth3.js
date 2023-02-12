
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
