let h1 = document.getElementById("header1") as HTMLElement;

h1?.addEventListener('click', handleClick2);

function handleClick2(this: HTMLElement) {
    this.style.backgroundColor = 'orange';
    this.removeEventListener('click', handleClick2);
}