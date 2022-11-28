function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const countOfBoxes = document.querySelector("input");
const btnCreateBoxes = document.querySelector("[data-create]");
const btnDestroyBoxes = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreateBoxes.addEventListener("click", createBoxes);
btnDestroyBoxes.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = +countOfBoxes.value;

  let size = 30;
  let blocks = "";
  for (let i = 0; i < amount; i += 1) {
    blocks += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  console.log(blocks);
  boxes.innerHTML = blocks;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  countOfBoxes.value = 0;
}
