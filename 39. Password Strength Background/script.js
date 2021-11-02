const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = Math.max(0, 20 - length * 2);
    background.style.filter = `blur(${blurValue}px)`;
});
