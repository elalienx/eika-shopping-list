// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import requestNewItem from "../scripts/requestNewItem";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function createItem(newId) {
    const newItem = requestNewItem(newId);

    setList([...list, newItem]);
  }

  return (
    <button className="button-main" onClick={() => createItem(list.length)}>
      Add a new item
    </button>
  );
}
