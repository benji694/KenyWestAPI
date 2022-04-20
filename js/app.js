const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
let data = ["test1", "test2"];

const render = () => {
  list.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let element = document.createElement("li");
    element.textContent = data[i];
    list.appendChild(element);
  }
};

btnAdd.addEventListener("click", () => {
  render();
});
