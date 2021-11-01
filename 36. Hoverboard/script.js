const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

for (let i = 0; i < SQUARES; ++i) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #1d1d1d 0 0 10px #1d1d1d";
}
