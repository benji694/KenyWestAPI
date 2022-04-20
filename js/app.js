const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
let quotes = [];

const render = () => {
  list.innerHTML = "";
  for (let i = 0; i < quotes.length; i++) {
    let element = document.createElement("li");
    element.textContent = quotes[i];
    list.appendChild(element);
  }
};

btnAdd.addEventListener("click", () => {
  render();
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
      if (!quotes.includes(data.quote)) {
        quotes.push(data.quote);
      } else {
        const header = document.querySelector("header");
        const p = document.createElement("p");
        p.style.color = "red";
        p.textContent =
          "Désoler, cette citation est déjà afficher ci-dessous...";
        header.appendChild(p);
      }
    })
    .catch((error) => console.log(error));
  render();
});
