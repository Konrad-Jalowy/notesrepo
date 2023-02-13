var h1 = document.getElementById("header1");
h1.addEventListener('click', handleClick2);
function handleClick2() {
    this.style.backgroundColor = 'orange';
    this.removeEventListener('click', handleClick2);
}
