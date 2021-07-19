// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";
import { completedState } from "../state/completedState";
import { listState } from "../state/listState";
import { storageKey } from "../state/storageKey";

export default function ListControls() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const [showCompleted, setShowCompleted] = useRecoilState(completedState);

  // Methods
  // Pure but void
  function createItem(list) {
    const newItem = {
      name: askName(),
      price: askPrice(),
      id: list.length,
      isCompleted: false,
      thumbnail: "",
    };
    const updatedList = [...list, newItem];

    storeInformation(updatedList, storageKey);
  }

  // Pure
  function askName() {
    const promptName = prompt("Whats the name of the shopping item?");

    if (promptName !== null && promptName !== "") return promptName.trim();
    else return "new item";
  }

  // Pure
  function askPrice() {
    const promptPrice = prompt("Whats its price in swedish kronas?");

    if (promptPrice !== null && promptPrice !== "") return promptPrice.trim();
    else return 0;
  }

  // Impure mutate state
  function storeInformation(list, storageKey) {
    setList(list);
    window.localStorage.setItem(storageKey, JSON.stringify(list));
  }

  // Pure
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
          {!showCompleted && <img src={IconOpenEye} alt="An open eye icon" />}
          {showCompleted && <img src={IconCloseEye} alt="A close eye icon" />}
          <span>{showCompleted ? "Hide" : "View"} acquired items</span>
        </button>
      )}
    </section>
  );
}
