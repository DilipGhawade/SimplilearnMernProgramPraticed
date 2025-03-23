let numbers = [10, 20, 30, 40, 50];
console.log(`original array => ${numbers}`);

numbers.forEach((num) => {
  console.log(num);
});

numbers.push(60);
console.log(numbers);

// let numbers = [10, 20, 30, 40, 50];

// console.log("Orginal Array: ", numbers);

// numbers.push(60);

// console.log("After push(60): ", numbers);

// numbers.pop();

// console.log("After pop():", numbers);

// numbers.shift();

// console.log("After shift(): ", numbers);

// numbers.unshift(5);

// console.log("After unshift(5):", numbers);

// console.log("Using foreach");

// numbers.forEach((num) => console.log(num * 2));

// let squaredNumbers = numbers.map((num) => num ** 2);

// console.log("Squared Numbers (map):", squaredNumbers);

// let evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log("Even Numbers ( filter );", evenNumbers);

// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log("Sum of numbers (reduce):", sum);

// let found = numbers.find((num) => num > 25);

// console.log("First number > 25 (find): ", found);
