let fetchData = new Promise(resolve, (reject) => {
  setTimeout(() => {
    let isSuccess = false;
    if (success) {
      resolve("Data fetched successfull");
    } else {
      reject("data feching is rejected");
    }
  }, 3000);
});
fetchData
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error);
  });
