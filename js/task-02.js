const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(
  ...ingredients.map((item) => {
    let itemList = document.createElement("li");
    itemList.textContent = item;
    return itemList;
  })
);

// const list = ingredients.map((item) => {
//   let itemList = document.createElement("li");
//   itemList.textContent = item;
//   return itemList;
// });

// ulIngredients.append(...list);

// for (let item of ingredients) {
//   let itemList = document.createElement("li");
//   itemList.textContent = item;
//   list.append(itemList);
// }
