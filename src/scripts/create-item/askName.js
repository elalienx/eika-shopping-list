export default function askName() {
  do {
    var userInput = prompt("What's  your name?");

    // guard if user press escape or clicks on the cancel button on the popup window
    if (userInput === null) return null;

    // parse the user input
    userInput = _parseString(userInput);
  } while (_isEmpty(userInput));

  return userInput;
}

export function _parseString(string) {
  return string.trim() !== "" ? string.trim() : "";
}

export function _isEmpty(string) {
  return string.trim() === "" ? true : false;
}
