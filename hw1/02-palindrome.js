const elem = document.querySelector("input");
const palindromeText = document.getElementById("palindrome");

const Status = Object.freeze({
  VALID_PALINDROME: 0,
  INVALID_PALINDROME: 1,
  NEGATIVE_NUM: 2,
  NON_NUMERIC: 3,
  EMPTY: 4,
});

const handleInput = () => {
  const value = elem.value;
  palindromeText.innerText = "";
  palindromeText.classList.remove("text-success", "text-danger");

  switch (evaluateNumber(value)) {
    case Status.VALID_PALINDROME:
      palindromeText.innerText = "Yes this is a palindrome";
      palindromeText.classList.add("text-success");
      break;
    case Status.INVALID_PALINDROME:
      palindromeText.innerText = "No. Try again.";
      palindromeText.classList.add("text-danger");
      break;
    case Status.NEGATIVE_NUM:
      palindromeText.innerText = "Negative number";
      palindromeText.classList.add("text-danger");
      break;
    case Status.NON_NUMERIC:
      palindromeText.innerText = "Non-numeric characters detected.";
      palindromeText.classList.add("text-danger");
      break;
    case Status.EMPTY:
      palindromeText.innerText = "";
      break;
  }
};
const evaluateNumber = (num) => {
  if (num.length === 0) return Status.EMPTY;
  if (Number.isNaN(num)) return Status.NON_NUMERIC;
  if (parseFloat(num) < 0) return Status.NEGATIVE_NUM;

  let l = 0;
  let r = num.length - 1;

  while (l <= r) {
    if (num[l++] !== num[r--]) {
      return Status.INVALID_PALINDROME;
    }
  }

  return Status.VALID_PALINDROME;
};

elem.addEventListener("input", handleInput);
