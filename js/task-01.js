// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
//  знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const AllUlCategories = document.querySelectorAll('.item')

console.log('Number of categories:', AllUlCategories.length);
// const categoriesArray = [...AllUlCategories]
//   .map(
//     categories => `Category: ${categories.querySelector('h2').textContent}
// Element: ${categories.querySelector('ul').children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

const categoriesArray = [...AllUlCategories]
for (const categories of categoriesArray) {
    const Evg = categories.querySelector('h2')
    const lub = categories.querySelector('ul')
    console.log("categori:", Evg.textContent);
    console.log("Element:", lub.children.length)
}








// const AllTitle = document.querySelectorAll('h2')
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });


// console.log('Category:',AllTitle);
