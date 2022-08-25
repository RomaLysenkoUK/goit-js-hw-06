



// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngr = document.querySelector("#ingredients");

const createIngred = ingredients.map(ingredient => {
  const itemIngr = document.createElement("li");
  itemIngr.textContent = `${ingredient}`
  itemIngr.classList.add('item')
  console.log(itemIngr);
  return itemIngr
})
  listIngr.append(...createIngred);

 //let itemIngredients = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const newItem = document.createElement("li");
//   newItem.textContent = ${i};
//   newItem.classList.add("item");
//   itemIngredients.push(newItem);
// }

// listIngredients.append(...itemIngredients);
// console.log(listIngredients);

// console.log(listIngr.append(itemIngr)); 