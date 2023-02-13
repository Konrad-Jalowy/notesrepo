var h1 = document.getElementById("header1");
h1 === null || h1 === void 0 ? void 0 : h1.addEventListener('click', handleClick2);
function handleClick2() {
    this.style.backgroundColor = 'orange';
    this.removeEventListener('click', handleClick2);
}
