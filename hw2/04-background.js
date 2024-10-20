// Add your code here
const backgroundContainer = document.querySelector(".background-container");
const button = document.querySelector(".start-button");
const userInput = document.querySelector("#userInput");
let time = 3000;
let intervalId = null;

const setColor = (r, g, b) => {
  backgroundContainer.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const setRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  setColor(r, g, b);
};

const repeatRandomColor = (aTime) => {
  intervalId = setInterval(() => {
    setRandomColor();
  }, aTime);
};

const handleClick = () => {
  backgroundContainer.classList.remove("bg-dark");
  if (button.value === "Start") {
    setRandomColor();
    repeatRandomColor(time);
    button.value = "Stop";
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
  } else {
    button.value = "Start";
    button.classList.remove("btn-danger");
    button.classList.add("btn-primary");
    clearInterval(intervalId);
  }
};

const handleInput = () => {
  const { value } = userInput;
  let number = parseFloat(value);

  if (Number.isNaN(number) || number <= 0) {
    number = 3;
  }

  time = number * 1000;
};

button.addEventListener("click", handleClick);
userInput.addEventListener("input", handleInput);
