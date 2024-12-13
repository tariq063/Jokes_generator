// const jokeP = document.getElementById('joke');
// const btn = document.getElementById('btn');
// const url = "https://v2.jokeapi.dev/joke/Any?type=single";

// let getJoke = () => {
//     fetch(url)
//     .then(data => data.json())
//     .then(item => jokeP.textContent = `${item.joke}`);
// };
// btn.addEventListener("click", getJoke);
// getJoke();


const jokeP = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

async function getJoke() {
        const response = await fetch(url);
        const data = await response.json();
        jokeP.textContent = data.joke 
    }

btn.addEventListener("click", getJoke);
getJoke();
