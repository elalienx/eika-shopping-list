// Project files
import { useList } from "../state/ListProvider";

export default function ButtonCreateItem() {
  // Global state
  const { dispatch } = useList();

  return (
    <button
      className="button-main"
      onClick={() => dispatch({ type: "createItem" })}
    >
      Add a new item
    </button>
  );
}
