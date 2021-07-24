// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function createItem(list) {
    const newItem = {
      id: list.length,
      name: askName(),
      price: askPrice(),
      acquired: false,
      imageURL: "",
    };

    setList([...list, newItem]);
  }

  function askName() {
    const promptName = prompt("What's  the name of the shopping item?");

    if (promptName !== null && promptName !== "") return promptName.trim();
    else return "new item";
  }

  function askPrice() {
    do {
      var selection = parseInt(prompt("What's the price in kronas?"), 10);
    } while (isNaN(selection));

    return selection;
  }

  return (
    <button className="button-main" onClick={() => createItem(list)}>
      Add a new item
    </button>
  );
}
