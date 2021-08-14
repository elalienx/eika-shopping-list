// Project files
import { useList } from "../state/ListProvider";

export default function ButtonCreateItem() {
  // Global state
  const { dispatch } = useList();

  // Methods
  function createItem(newId) {
    const
  }

  return (
    <button
      className="button-main"
      onClick={() => dispatch({ type: "createItem" })}
    >
      Add a new item
    </button>
  );
}
