const elem = document.querySelector("input");
const palindromeText = document.getElementById("palindrome");

const isPalindrome = (num) => {
  let l = 0;
  let r = num.length - 1;

  while (l <= r) {
    if (num[l] !== num[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }

  return true;
};

const handleInput = () => {
  const { value } = elem;
  palindromeText.innerText = "";
  palindromeText.classList.remove("text-success", "text-danger");

  if (value.length === 0) {
    palindromeText.innerText = "";
    return;
  }

  if (Number.isNaN(value) || value.includes(" ")) {
    palindromeText.innerText = "Non-numeric characters detected.";
    palindromeText.classList.add("text-danger");
    return;
  }

  if (parseFloat(value) < 0) {
    palindromeText.innerText = "Negative number";
    palindromeText.classList.add("text-danger");
    return;
  }

  if (isPalindrome(value)) {
    palindromeText.innerText = "Yes. this is a palindrome!";
    palindromeText.classList.add("text-success");
  } else {
    palindromeText.innerText = "No. Try again.";
    palindromeText.classList.add("text-danger");
  }
};

elem.addEventListener("input", handleInput);
