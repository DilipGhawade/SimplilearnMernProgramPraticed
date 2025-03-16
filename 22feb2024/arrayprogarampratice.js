const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// push is used to add the element at the end of array
numbers.push(10);
// pop is used to remove the last element of and array.
numbers.pop();
// shift is used to remove the first element of an array.
numbers.shift();
// unshift is used to add the element into array at the begining of an array.
numbers.unshift(100);
// for each loop is used to iterate an array .
// iteration means we are traverse the each element of an array.
numbers.forEach((n) => {
  //   //console.log(n);
});

// it check the less then 10 element is present or not if find the it retruns the first one
const isElementFind = numbers.find((e) => e < 10);
//console.log("Is element is Found in array -> ", isElementFind);

// it it used to add the filter on array to get some spcified element form an array,
const filter = numbers.filter((ele) => ele % 2 === 0);
//console.log(`filter ${filter}`);

// reduce by using this we have calculated the sum of present element in given array.
const sum = numbers.reduce((a, b) => a + b, 0);
//console.log(sum);
// map
const map = numbers.map(mult);
function mult(num) {
  return num * 2;
}
//console.log(map);

// it check the passed element is present in array or not if present it returns the true if not then return the false.
const included = numbers.includes(100);
//console.log(included);

// index of method used to find the location of given element present in array.
// it return the index of the element
const indexOf = numbers.indexOf(6);
//console.log(indexOf);

// array sorting

let city = ["pune", "mumbai", "beed", "chandrapur", "latur", "nagar"];
let sortArray = city.sort();
//console.log(sortArray);

const spredExample = [...numbers];
const [first, second] = [...numbers];
console.log(spredExample);
console.log(first);
console.log(second);

console.log("the lenth of given array is " + numbers.length);
numbers.length = 5;
console.log(numbers);
