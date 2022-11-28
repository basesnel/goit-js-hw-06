const textInput = document.querySelector("#validation-input");
const textLength = +textInput.dataset.length;

textInput.addEventListener("blur", () => {
  textInput.classList.add("invalid");
  if (textInput.value.length === textLength)
    textInput.classList.replace("invalid", "valid");
});
