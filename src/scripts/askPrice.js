export default function askPrice() {
  do {
    var selection = prompt("What's the price in kronas?");

    // guard if user clicks on cancel
    if (selection === undefined) return null;
    if (selection === null) return null;

    // parse the user input
    selection = _sanitize(selection);
  } while (isNaN(selection));

  return selection;
}

function _sanitize(x) {
  if (Number(x)) {
    return x;
  }
  return NaN;
}
