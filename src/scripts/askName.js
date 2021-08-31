export default function askName() {
  let userInput = "";

  do {
    userInput = prompt("What's the name of the shopping item?");

    // guard if user press escape or clicks on the cancel button on the popup window
    if (userInput === null) return null;

    // parse the user input
    userInput = parseString(userInput);
  } while (isEmpty(userInput));
}

// code to validatean string
export function parseString(string) {
  return string.trim() !== "" ? string.trim() : "";
}

export function isEmpty(string) {
  return string.trim() === "" ? true : false;
}
