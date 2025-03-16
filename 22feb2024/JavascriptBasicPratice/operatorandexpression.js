// let a = 10;
// let b = 20;
// let result = a + b;
// console.log("the addeition is ", result);
let x = 10;
let y = 3;

console.log(" x + y = ", x + y);
console.log(" x - y = ", x - y);
console.log(" x * y = ", x * y);
console.log(" x / y = ", x / y);
console.log(" x % y = ", x % y);
console.log(" x ** y = ", x ** y);
let a = 5;
a += 2;
console.log("a after += 2:", a);
a *= 3;
console.log("a after *= 3:", a);
a -= 4;
console.log("a after -= 4:", a);

let m = 10;

let n = "10";

console.log("m == n: ", m == n); // value

console.log("m === n :", m === n); // value + type

console.log("m > 5 :", m > 5);

console.log("m < 5 :", m < 5);

let isAdult = true;

let hasLicencse = false;

console.log("AND (&&):", isAdult && hasLicencse);

console.log("OR (||) :", isAdult || hasLicencse);

console.log("NOT (!) :", !isAdult);

function reverseNo(number) {
  let rev = 0;
  while (number != 0) {
    rev = rev * 10 + (number % 10);
    number = (number - (number % 10)) / 10;
  }
  return rev;
}

console.log(reverseNo(12345));

function reverseString() {
  let string = "dilip";
  let result = "";
  for (let i = 0; i <= string.length; i++) {
    result = string.charAt(i) + result;
  }
  console.log(result);
}
reverseString();

function reverseArray() {
  let array = [1, 2, 3, 4, 5, 6];
  for (let i = 0; (j = array.length); i++, j--) {}
}

let voteAge = 18;
let canVote = voteAge >= 18 ? "You can vote" : "No you to young";
console.log(canVote);
