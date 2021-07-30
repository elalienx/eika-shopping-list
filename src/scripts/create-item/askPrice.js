export default function askPrice() {
  do {
    var userInput = prompt("What's the price in kronas?");

    // guard if user clicks on cancel
    if (userInput === null) return null;

    // parse the user input
    userInput = _parseNumber(userInput);
  } while (isNaN(userInput));

  return userInput;
}

export function _parseNumber(number) {
  // because JS like to mess with us and the if does not transform a string into number just validate it
  return Number(number) ? Number(number) : NaN;
}
