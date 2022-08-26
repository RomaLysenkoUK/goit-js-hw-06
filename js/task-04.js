


// Створи змінну counterValue, в якій буде зберігатися поточне
//  значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = document.querySelector('#value');

document.querySelector('[data-action="decrement"]').addEventListener('click',()=>{
    counterValue.innerHTML = Number(counterValue.innerHTML) - 1;
});

document.querySelector('[data-action="increment"]').addEventListener('click',()=>{
    counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
});