

const number = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("result");

  if (guess === number) {
    result.textContent = " Correct! You guessed the number!";
    result.style.color = "green";
  } else if (guess < number) {
    result.textContent = "Too low! Try again.";
    result.style.color = "red";
  } else if (guess > number) {
    result.textContent = "Too high! Try again.";
    result.style.color = "red";
  } else {
    result.textContent = "Please enter a number.";
  }
}
