const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener(
  "change",
  () => (text.style.fontSize = `${rangeInput.value}px`)
);
