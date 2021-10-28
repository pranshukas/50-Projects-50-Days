const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x;
let y;
let isPressed = false;
let size = 10;
let color = "black";

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2 * size;
    ctx.stroke();
}

// DOM Manipulation

const sizeText = document.getElementById("size");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clearEl = document.getElementById("clear");
const colorEl = document.getElementById("color");

increase.addEventListener("click", () => {
    if (size < 50) {
        size += 5;
        sizeText.innerHTML = `${size}`;
    }
});

decrease.addEventListener("click", () => {
    if (size > 5) {
        size -= 5;
        sizeText.innerHTML = `${size}`;
    }
});

colorEl.addEventListener("change", (e) => color = e.target.value);

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

