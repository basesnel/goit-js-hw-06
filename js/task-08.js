const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const loginData = { email: email.value, password: password.value };

  if (loginData.email === "" || loginData.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${loginData.email}, Password: ${loginData.password}`);
  console.dir(event.currentTarget.elements);
}
