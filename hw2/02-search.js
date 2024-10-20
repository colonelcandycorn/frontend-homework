const cardContainer = document.querySelector(".card-container");
const userInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

const createCardTitle = function createCardTitleWithHighlightedSearchText(
    name,
    searchText,
) {
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");

  const nameParts = name.split(new RegExp(`(${searchText})`, "gi"));

  nameParts.forEach((part) => {
    const span = document.createElement("span");
    span.textContent = part;

    if (part.toLowerCase() === searchText.toLowerCase()) {
      span.classList.add("bg-warning");
    }

    cardTitle.appendChild(span);
  });

  return cardTitle;
};


const createResultCard = function createResultCard(result) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = createCardTitle(result.name, userInput.value);
  card.appendChild(cardTitle);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const birthYear = document.createElement("p");
  birthYear.classList.add("card-text");
  birthYear.textContent = `Birth Year: ${result.birth_year}`;

  cardBody.appendChild(birthYear);

  return card;
};

const createRow = function searchResultRow() {
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("g-4");
  row.classList.add("mb-4");
  row.classList.add("justify-content-center");

  return row;
};

const createCardAndAddToRow = function addCardToRow(row, result) {
  const card = createResultCard(result);
  card.classList.add("p-3");

  const col = document.createElement("div");
  col.classList.add("col-md-4");
  col.classList.add("h-100");
  col.appendChild(card);

  row.appendChild(col);

  return row;
};

const handleClick = function handleClick() {
  // make empty message invisible
  cardContainer.classList.remove("d-flex");

  // Clear the card container
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  const searchValue = userInput.value.trim();

  if (searchValue === "") {
    const text = document.createTextNode("Please enter a search value");
    cardContainer.classList.add("d-flex");
    cardContainer.appendChild(text);
    text.classList.add("card-text");
    return;
  }

  // eslint-disable-next-line no-undef
  const results = characters.filter((character) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase()),
  );
  let row = createRow();

  let addedCount = 0;
  results.forEach((result) => {
    if (addedCount % 2 === 0) {
      cardContainer.appendChild(row);
      row = createRow();
    }

    createCardAndAddToRow(row, result);
    addedCount += 1;
  });

  cardContainer.appendChild(row);
};

searchButton.addEventListener("click", handleClick);
