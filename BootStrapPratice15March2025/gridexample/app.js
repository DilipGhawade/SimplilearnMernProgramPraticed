const responsiveDiv = document.querySelector("#responsive1");
console.log(responsiveDiv);

responsiveDiv.addEventListener("click", () => {
  console.log("the div clicked");

  responsiveDiv.style.backgroundColor = "red";
});
