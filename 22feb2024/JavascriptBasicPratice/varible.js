let name = "Name: dilip";
console.log(name);
let age = 30;
console.log(`age: ${age}`);
let isValid = true;
console.log(isValid);
let car = null;
console.log("car: ", car);
let bigNo =
  123456789123456782345678123456789123456781234567891234567890123456789123456789n;
console.log(`big no ${bigNo}`);
let uniqueId = Symbol("id");
console.log(uniqueId);

let user = {
  name: "Dilip",
  [Symbol("id")]: 101,
};
console.log(user);
console.log(Object.getOwnPropertySymbols(user));
console.log("the type of user is", typeof user);
console.log("the type of name is", typeof name);
console.log("the type of age is", typeof age);
console.log("the type of big no is", typeof bigNo);
console.log("the type of unique id is", typeof uniqueId);
