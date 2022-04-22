const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const header = document.querySelector("header");

const quotes = [];

btnAdd.addEventListener("click", () => {
  if (header.children.length > 4) {
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
    let p = document.createElement("p");
    p.textContent = quotes[i];
    let buttonGroup = document.createElement("div");
    buttonGroup.className = "buttonGroup";
    let btnUp = document.createElement("button");
    btnUp.textContent = "UP";
    btnUp.onclick = () => {
      moveUp(i);
    };
    let btnDown = document.createElement("button");
    btnDown.textContent = "DOWN";
    btnDown.onclick = () => {
      moveDown(i);
    };
    buttonGroup.appendChild(btnUp);
    buttonGroup.appendChild(btnDown);
    element.appendChild(p);
    element.appendChild(buttonGroup);
    list.appendChild(element);
  }
};

const moveUp = (index) => {
  if (index == 0) {
    return false;
  }
  let quote = quotes.splice(index, 1);
  quotes.splice(index - 1, 0, quote[0]);
  render();
};

const moveDown = (index) => {
  if (index === quotes.length - 1) {
    return false;
  }
  let quote = quotes.splice(index, 1);
  quotes.splice(index + 1, 0, quote[0]);
  render();
};
