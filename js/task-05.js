// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє
// його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputUpp = document.querySelector('#name-input')
const outputNpp = document.querySelector('#name-output')

inputUpp.addEventListener('input', (event) => {
    
    outputNpp.textContent = event.target.value.length > 0 ? event.target.value : 'Anonymous';
    // console.log(event);
})  //=`${inputUpp}`

