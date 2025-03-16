// create a function for form validationLogin with user name and password is hardcode

function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "dilip" && password === "1234") {
    alert("Login successful");
    return true;
  } else {
    alert("Invalid username or password");
    return false;
  }
}
