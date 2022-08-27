document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let field_email = this.elements[0];
  let field_passw = this.elements[1];

  if (field_email.value.length == 0 || field_passw.value.length == 0) {
    alert("Всі поля повинні бути заповнені");
    return 0;
  }

  let obj = { email: field_email.value, password: field_passw.value };
  document.querySelector(".login-form").reset();
  console.log(obj);
});
