// Project files
import requestNewItem from "../scripts/create-item/requestNewItem";
import { useList } from "../state/ListProvider";

export default function ButtonCreateItem() {
  // Global state
  const { list, dispatch } = useList();

  // Methods
  function createItem(newId) {
    const item = requestNewItem(newId);

    dispatch({ type: "addItem", item });
  }

  return (
    <button className="button-main" onClick={() => createItem(list.length)}>
      Add a new item
    </button>
  );
}
