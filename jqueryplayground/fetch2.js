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