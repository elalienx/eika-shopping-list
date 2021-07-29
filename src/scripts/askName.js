export default function askName() {
  do {
    var selection = prompt("What's  the name of the shopping item?");

    // guard if user clicks on cancel
    if (selection === undefined) return null;
    if (selection === null) return null;

    // parse the user input
    selection = _validate(selection);
  } while (_isEmpty(selection));

  return selection;
}

function _validate(string) {
  if (string.trim() !== "") {
    return string.trim();
  }
  return "";
}

function _isEmpty(string) {
  if (string.trim() === "") return true;
  else return false;
}
