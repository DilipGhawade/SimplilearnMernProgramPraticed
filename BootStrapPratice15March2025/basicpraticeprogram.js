// reverse a numner
function reverseNO() {
  let num = 12345;
  let rev = 0;
  while (num != 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = (num / 10) | 0;
  }
  console.log(`the reverse no is ${rev}`);
}
//reverseNO();
// reverse a string
function reverseString() {
  let string = "dilip";
  let rev = "";
  for (let i = 0; i < string.length; i++) {
    rev = string.charAt(i) + rev;
  }
  console.log("The reverse string ", rev);
}
//reverseString();

// check no is prime or not
function isprime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
//let isPrime = isprime(7);
//console.log(`the is Prime => ${isPrime}`);

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
//console.log(`the factorial of given no is ${factorial(5)}`);
function factorial1(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(  `the factorial of given no uing without recursive is => ${factorial1(5)}`);

function isPalindrodmeNumber(num) {
  let originalNo = num;
  let rev = 0;
  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = (num / 10) | 0;
  }
  //   console.log(`ther rev no is ${rev}`);
  if (originalNo === rev) {
    console.log(`The given no is palindrome`);
    return true;
  } else {
    console.log("the given no is not palindrome");
    return false;
  }
}

// console.log(isPalindrodmeNumber(121));

let array = [10, 5, 20, 8];
function reverseArray() {
  console.log(`the original array is ${array}`);

  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  console.log(`the reversed array is ${result}`);
}

// reverseArray();

function findMaxElementInArray() {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  console.log(`the max no of given array is => ${max}`);
}
findMaxElementInArray();

function findSecondMax() {
  let max = array[0];
  let secondMax = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] >= secondMax && array[i] != max) {
      secondMax = array[i];
    }
  }
  console.log(`the second max element in given array is ${secondMax}`);
}

findSecondMax();

function fabonnaciSeries(num) {
  let n1 = 0;
  let n2 = 1;
  let series = [n1, n2];
  //   console.log(`${n1} ${n2}`);
  let sum = 0;
  for (let i = 2; i < num; i++) {
    sum = n1 + n2;
    // console.log(sum);
    series[series.length] = sum;
    n1 = n2;
    n2 = sum;
  }
  console.log(`factorial searies ${series}`);
}

fabonnaciSeries(5);
