function validateForm() {
  let name = document.getElementById("name").value.trim();

  let email = document.getElementById("email").value.trim();

  let password = document.getElementById("password").value.trim();

  let terms = document.getElementById("terms").checked;

  let nameError = document.getElementById("nameError");

  let emailError = document.getElementById("emailError");

  let passwordError = document.getElementById("passwordError");

  let termsError = document.getElementById("termsError");

  nameError.innerText = "";

  emailError.innerText = "";

  passwordError.innerText = "";

  termsError.innerText = "";

  if (name === "") {
    nameError.innerText = "Name is required";
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let isValid = true;

  if (email === "") {
    emailError.innerText = "Email is required.";

    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.innerText = "Enter a valid email address.";

    isValid = false;
  }

  if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters.";

    isValid = false;
  }

  if (!terms) {
    termsError.innerText = "You must agree to the terms.";

    isValid = false;
  }

  return isValid;
}
