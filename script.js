const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const generate = async () => {

  try {
    const setHeader = {
      headers: {
        Accept: "application/json"
      }
    }

    const res = await fetch("https://icanhazdadjoke.com/", setHeader)
    const data = await res.json();
    joke.innerHTML = data.joke;

  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener('click', generate)
generate();