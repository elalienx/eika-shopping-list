// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import requestNewItem from "../scripts/requestNewItem";
import { listState } from "../state/listState";

export default function ButtonCreateItem() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function createItem(newId) {
    const newItem = requestNewItem(newId);

    if (newItem !== null) setList([...list, newItem]);
  }

  return (
    <button className="button-main" onClick={() => createItem(list)}>
      Add a new item
    </button>
  );
}
