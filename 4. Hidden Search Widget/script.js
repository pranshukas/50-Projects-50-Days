var search = document.querySelector(".search");
var input = document.querySelector(".input");
var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});
