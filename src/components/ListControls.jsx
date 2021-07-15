// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { completedState } from "../state/completedState";
import { listState } from "../state/listState";
import { storageKey } from "../state/storageKey";

export default function ListControls() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const [showCompleted, setShowCompleted] = useRecoilState(completedState);

  // Methods
  function createItem(list) {
    const newItem = {
      name: askName(),
      price: askPrice(),
      id: list.length,
      isCompleted: false,
    };
    const updatedList = [...list, newItem];

    saveInformation(updatedList, storageKey);
  }

  function askName() {
    const promptName = prompt("Whats the name of the shopping item?");

    if (promptName !== null && promptName !== "") return promptName;
    else return "new item";
  }

  function askPrice() {
    const promptPrice = prompt("Whats its price?");

    if (promptPrice !== null && promptPrice !== "") return promptPrice;
    else return 0;
  }

  function saveInformation(list, storageKey) {
    setList(list);
    window.localStorage.setItem(storageKey, JSON.stringify(list));
  }

  function toggleCompleteList() {
    setShowCompleted(!showCompleted);
  }

  return (
    <section className="list-controls">
      <button className="button-main" onClick={() => createItem(list)}>
        Add a new item
      </button>

      {list.length > 0 && (
        <button className="button-secondary" onClick={toggleCompleteList}>
          {showCompleted ? "Hide" : "View"} adquired items
        </button>
      )}
    </section>
  );
}
