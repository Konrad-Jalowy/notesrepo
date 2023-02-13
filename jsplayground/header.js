let h1 = document.querySelector("#header1");
h1.addEventListener("click", function(){
    this.style.backgroundColor = 'orange';
    this.removeEventListener("click", this);
});