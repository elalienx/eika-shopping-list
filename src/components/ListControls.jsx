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

    const promptName = prompt("Whats the name of the shopping item?");
    if (promptName !== null && promptName !== "") newItem.name = promptName;
    else return;

    const promptPrice = prompt("Whats its price?");
    if (promptPrice !== null && promptPrice !== "") newItem.price = promptPrice;
    else return;

    const newList = [...list, newItem];
    setList([...list, newItem]);
    window.localStorage.setItem(storageKey, JSON.stringify(newList));
  }

  function toggleCompleteList() {
    setShowCompleted(!showCompleted);
  }

  return (
    <section className="list-controls">
      <button className="button-main" onClick={createItem}>
        Add a new item
      </button>
      <button className="button-secondary" onClick={toggleCompleteList}>
        View adquired items
      </button>
    </section>
  );
}
