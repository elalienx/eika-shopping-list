// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import askName from "../scripts/askName";
import askPrice from "../scripts/askPrice";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function createItem(list) {
    const name = askName();
    if (name === null) return;

    const price = askPrice();
    if (price === null) return;
    console.log(price);

    const newItem = {
      id: list.length,
      name: name,
      price: price,
      acquired: false,
      imageURL: "",
    };

    setList([...list, newItem]);
  }

  return (
    <button className="button-main" onClick={() => createItem(list)}>
      Add a new item
    </button>
  );
}
