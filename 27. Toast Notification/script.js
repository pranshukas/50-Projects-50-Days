const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Message One", "Message Two", "Message Three", "Message Four"];
const type = ["info", "success", "error"];

button.addEventListener("click", createNotification);

let indx = 0;

function createNotification() {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(getRandomType());
    toast.innerHTML = getRandomMessage();
    toasts.appendChild(toast);
    setTimeout(() => deleteNotification(toast), 2300);
}

function deleteNotification(toast) {
    toasts.removeChild(toast);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return type[Math.floor(Math.random() * type.length)];
}
