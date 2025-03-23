let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response: ", JSON.parse(xhr.responseText));
  } else {
    console.log("Error: ", xhr.status);
  }
};

xhr.send();
console.log("fetching data");
