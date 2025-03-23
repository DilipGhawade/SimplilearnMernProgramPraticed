function revrseNo() {
  let rev = 0;
  const n = 12345;
  while (n != 0) {
    rev = rev * 10 + (n % 10);
    n = (n % 10) / 2;
  }
  console.log("The reverse no is => " + rev);
}
