// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import askName from "../scripts/askName";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function createItem(list) {
    const name = askName();
    if (name === null) return;

    const price = askPrice();
    if (price === null) return;

    const newItem = {
      id: list.length,
      name: name,
      price: price,
      acquired: false,
      imageURL: "",
    };

    setList([...list, newItem]);
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
