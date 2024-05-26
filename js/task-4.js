const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", ev => {
	ev.preventDefault();
  const formData = new FormData(loginForm);
  let allFieldsFilled = true;
  const userData = {};
  formData.forEach((e, i) => {
      if (!e) {
        allFieldsFilled = false;
      }
     userData[i] = e.trim();
  })
  if (!allFieldsFilled) {
      alert('All form fields must be filled in');
      return;
    }
  console.log(userData);
  loginForm.reset();
});
