// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { completedState } from "../state/completedState";
import { listState } from "../state/listState";
import { storageKey } from "../state/storageKey";

export default function ListControls() {
  // External state
  const [list, setList] = useRecoilState(listState);
  const [showCompleted, setShowCompleted] = useRecoilState(completedState);

  // Methods
  function createItem() {
    const newId = list.length;
    const newItem = { name: "", price: "", id: newId, isCompleted: false };
    let updatedList = [];

    const promptName = prompt("Whats the name of the shopping item?");
    if (promptName !== null && promptName !== "") newItem.name = promptName;
    else return;

    const promptPrice = prompt("Whats its price?");
    if (promptPrice !== null && promptPrice !== "") newItem.price = promptPrice;
    else return;

    updatedList = [...list, newItem];
    setList(updatedList);
    window.localStorage.setItem(storageKey, JSON.stringify(updatedList));
  }

  function toggleCompleteList() {
    setShowCompleted(!showCompleted);
  }

  return (
    <section className="list-controls">
      <button className="button-main" onClick={createItem}>
        Add a new item
      </button>

      {list.length > 0 && (
        <button className="button-secondary" onClick={toggleCompleteList}>
          View adquired items
        </button>
      )}
    </section>
  );
}
