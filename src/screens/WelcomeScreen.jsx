// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import Image from "../assets/images/urban-shopping.png";
import requestNewItem from "../scripts/requestNewItem";
import { listState } from "../state/listState";

export default function WelcomeScreen() {
  // Global state
  const [, setList] = useRecoilState(listState);

  // Methods
  function createItem(newId) {
    const newItem = requestNewItem(newId);

    if (newItem !== null) setList([newItem]);
  }

  return (
    <div id="welcome-page">
      <img src={Image} alt="Woman getting out of a store with shopping bags" />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>

      {/* Primary controls */}
      <button className="button-main" onClick={() => createItem(0)}>
        Add a new item
      </button>
    </div>
  );
}
