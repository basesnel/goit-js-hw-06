function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = colorValue.textContent =
    getRandomHexColor();
});
