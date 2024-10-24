// Add your code here
const userInput = document.querySelector("#userInput");
const searchText = document.querySelector(".search-text");

const handleKeyDown = () => {
  const paragraph = searchText.textContent;
  const searchWord = userInput.value;
  const regEx = new RegExp(`\\b(${searchWord})\\b`, "gi");
  const searchParts =
    searchWord.length > 0 ? paragraph.split(regEx) : [paragraph];

  while (searchText.firstChild) {
    searchText.removeChild(searchText.firstChild);
  }

  searchParts.forEach((value) => {
    const span = document.createElement("span");

    if (searchWord.length > 0 && value.match(regEx) !== null) {
      span.classList.add("bg-warning");
    }

    span.textContent = value;
    searchText.appendChild(span);
  });
};

userInput.addEventListener("input", handleKeyDown);
