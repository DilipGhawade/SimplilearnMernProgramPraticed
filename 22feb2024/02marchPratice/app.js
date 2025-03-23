function reversNo(no) {
  let rev = 0;
  while (no != 0) {
    rev = rev * 10 + (no % 10);
    no = (no / 10) | 0;
  }
  return rev;
}
let reverse = reversNo(1234);
console.log(reverse);

function multiplier(x) {
  return (y) => x * y;
}

const double = multiplier(2);
console.log(double(5));

// function constructor

function Person(name) {
  this.name = name;
}

let user = new Person("Dilip");

console.log(`The UserName is: ${user.name}`);

function reverseString() {
  let string = "dilip";
  let result = "";
  for (let i = 0; i <= string.length; i++) {
    result = string.charAt(i) + result;
  }
  console.log(result);
}
