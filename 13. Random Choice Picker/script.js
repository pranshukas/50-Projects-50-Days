const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
});

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag=> tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        tagsEl.innerHTML +=`<span class="tag">${tag}</span>`

        // Another Way of Doing this 
        // const tagEL = document.createElement("span");
        // tagEL.classList.add("tag");
        // tagEL.innerText = tag;
        // tagsEl.appendChild(tagEL);
    })
}
