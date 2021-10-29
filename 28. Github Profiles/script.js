const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
    } catch (err) {
        console.log(err);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = search.value;

    if(username) {
        getUser(username)
        search.value = '';
    }
})