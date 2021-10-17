const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
    load++;
    if (load >= 100) {
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = 1 - load / 100;
    var value = 30 * (1 - load / 100);
    bg.style.filter = `blur(${value}px)`;
}
