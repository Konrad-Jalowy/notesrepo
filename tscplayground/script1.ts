let btn : HTMLButtonElement = document.querySelector("#btn") as HTMLButtonElement;

btn?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement) {
    alert("Clicked");
    this.setAttribute('disabled', 'true');
    this.textContent = "Already clicked";
    this.removeEventListener('click', handleClick)
}