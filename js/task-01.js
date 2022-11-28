const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

// static collect:
// const list = categories.querySelectorAll(".item");
// live collect:
const list = categories.getElementsByClassName("item");

for (let item of list) {
  // console.log(`\nCategory: ${item.firstElementChild.innerText}`);
  console.log(`\nCategory: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
