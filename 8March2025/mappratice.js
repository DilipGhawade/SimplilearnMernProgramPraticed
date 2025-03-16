let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

let double = numbers.map((num) => num * 3);
// console.log(double);
let userMap = new Map();
userMap.set(101, "Dilip");
userMap.set(102, "nidisha");
userMap.set(103, "utkrash");

console.log("user 101 => ", userMap.get(101));

userMap.forEach((key, value) => {
  console.log("Key: ", key);
  console.log("value: ", value);
});
// let userMap = new Map();

// userMap.set(101,"vinodh");

// userMap.set(102,"Samarth");

// userMap.set(103,"Chushruth");

// console.log("User 101:",userMap.get(101));

// console.log("Has 102 ?", userMap.has(102));

// userMap.forEach((value,key) => {

//     console.log(`ID: ${key}, Name: ${value}`);

// });

let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;

    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Data fetch failed");
    }
  }, 2000);
});

//Handling Promise result

fetchData

  .then((response) => console.log(response))

  .catch((error) => console.log(error));

console.log("Fetching Data ...");
