const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);
    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard("No Profile with this Username");
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = search.value;

    if (username) {
        getUser(username);
        search.value = "";
    }
});

function createUserCard(user) {
    const { name, avatar_url, bio, followers, following, public_repos } = user;
    const cardHTML = `<div class="card">
        <div>
            <img src="${avatar_url}" alt="${name}" class="avatar"/>
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>${bio}</p>
            <ul>
                <li>${followers} <strong>Followers</strong></li>
                <li>${following} <strong>Following</strong></li>
                <li>${public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                <a href="#" class="repo">Exam-Time-Table-Generator</a>
                <a href="#" class="repo">pranshukas</a>
                <a href="#" class="repo">winter-of-contributing</a>
                <a href="#" class="repo">CSES-problem-solutions</a>
                <a href="#" class="repo">cops-website</a>
            </div>
        </div>
    </div>`;
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
}
