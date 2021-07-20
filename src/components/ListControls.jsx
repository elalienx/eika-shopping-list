// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";
import { completedState } from "../state/completedState";
import { listState } from "../state/listState";

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

    setList(updatedList);
  }

  // Pure
  function askName() {
    const promptName = prompt("What's  the name of the shopping item?");

    if (promptName !== null && promptName !== "") return promptName.trim();
    else return "new item";
  }

  // Pure
  function askPrice() {
    do {
      var selection = parseInt(prompt("What's the price in kronas?"), 10);
    } while (isNaN(selection));

    return selection;
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
