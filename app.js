let canvas = document.querySelector("#canvas");
let button = document.querySelector("#button");

// Generate Random No. Between 0 to 255
const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 255);
};

button.addEventListener("click", () => {
  canvas.style.backgroundColor = `rgb(
    ${randomNumberGenerator()},
    ${randomNumberGenerator()},
    ${randomNumberGenerator()}
    )`
})