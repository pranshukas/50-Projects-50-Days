const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}
