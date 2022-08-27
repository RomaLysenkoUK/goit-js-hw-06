// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде
// ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй
//  властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// document.querySelector(".login-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let field_email = this.elements[0];
//   let field_passw = this.elements[1];
//   console.log(this.elements[0]);
//   if (field_email.value.length == 0 || field_passw.value.length == 0) {
//     alert("Всі поля повинні бути заповнені");
//     return 0;
//   }

//   let obj = { email: field_email.value, password: field_passw.value };
//   document.querySelector(".login-form").reset();
//   console.log(obj);
// });

const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(form);
  const { elements } = form;
  let field_email = elements[0];
  let field_passw = elements[1];
  if (field_email.value.length == 0 || field_passw.value.length == 0) {
    alert("Всі поля повинні бути заповнені");
    return 0;
  }

  let obj = { email: field_email.value, password: field_passw.value };
  document.querySelector(".login-form").reset();
  console.log(obj);
});

// Спросить у Руслана почему не заходит в Лэйбл а напрямую в инпут!
