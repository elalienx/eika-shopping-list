// NPM Packages
import { useRecoilState } from "recoil";

// Project list
import { listState } from "../state/listState";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  // Pure but void
  function createItem(list) {
    const newItem = {
      name: askName(),
      price: askPrice(),
      id: list.length,
      isCompleted: false,
      thumbnail: "",
    };
    const updatedList = [...list, newItem];

    setList(updatedList);
  }

  // Pure
  function askName() {
    const promptName = prompt("What's  the name of the shopping item?");

    if (promptName !== null && promptName !== "") return promptName.trim();
    else return "new item";
  }

  // Pure
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
