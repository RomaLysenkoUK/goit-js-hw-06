// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
//  знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const AllUlCategories = document.querySelectorAll(".item");

console.log("Number of categories:", AllUlCategories.length);

const categoriesArray = [...AllUlCategories];
for (const categories of categoriesArray) {
  const categoryH2 = categories.querySelector("h2");
  const categoryUl = categories.querySelector("ul");
  console.log("categori:", categoryH2.textContent);
  console.log("Element:", categoryUl.children.length);
}
