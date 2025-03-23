let users = [
  { username: "admin", password: "admin", role: "admin" },

  { username: "user", password: "user", role: "user" },
];

function authenticate(username, password) {
  let user = users.find(
    (u) => u.username === username && u.password === password
  );

  return user ? user : null;
}

let loggedInUser = authenticate("admin", "admin");

if (loggedInUser) {
  console.log(`Login succesful Welcome, ${loggedInUser.username}`);
} else {
  console.log("Invalid credentials");
}
