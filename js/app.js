const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const header = document.querySelector("header");
let quotes = [];

btnAdd.addEventListener("click", () => {
  if (header.children.length > 3) {
    const p = header.querySelector("p");
    header.removeChild(p);
  }
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
      if (!quotes.includes(data.quote)) {
        quotes.push(data.quote);
        console.log(quotes);
      } else {
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

const render = () => {
  list.innerHTML = "";
  for (let i = 0; i < quotes.length; i++) {
    let element = document.createElement("li");
    element.innerHTML = `
        <p>${quotes[i]}</p>
        <div class='buttonGroup'>
            <button class='btnUp'>UP</button>
            <button class='btnDown'>DOWN</button>
        </div>
    `;

    list.appendChild(element);
  }
};
