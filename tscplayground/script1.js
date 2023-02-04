var btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
function handleClick() {
    alert("Clicked");
    this.setAttribute('disabled', 'true');
    this.textContent = "Already clicked";
    this.removeEventListener('click', handleClick);
}
