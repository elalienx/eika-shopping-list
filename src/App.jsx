// Core
import { useState } from "react";

// Local imports
import DummyData from "./dummyData.json";
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  // Local state
  const [list, setList] = useState([]);

  // Properties
  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  function onCreate() {
    const newId = list.length;
    const newItem = { name: "", price: "", id: newId, isCompleted: false };
    const promptName = prompt("Whats the name of the shopping item?");
    const promptPrice = prompt("Whats its price?");

    if (promptName !== null) {
      newItem.name = promptName;
    }
    // Note: Add some test to verify that the price is just a number
    if (promptPrice !== null) {
      newItem.price = promptPrice;
    }

    setList([...list, newItem]);
  }

  function onUpdate(id) {
    const item = list[id];
    const status = item.isCompleted;

    item.isCompleted = !status;

    setList([...list]);
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}

      <h2>Pending (active)</h2>
      <ShoppingList list={activeItems} onUpdate={onUpdate} />

      {/* We leave here until we add the toggle items button */}
      <h2>Completed (archived)</h2>
      <ShoppingList list={inactiveItems} onUpdate={onUpdate} />

      <button onClick={onCreate}>Add a new item</button>
    </div>
  );
}
