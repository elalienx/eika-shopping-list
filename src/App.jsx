// Core
import { useState } from "react";

// Local imports
import DummyData from "./dummyData.json";
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  // Local state
  const [list, setList] = useState(DummyData);

  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  function oncChange(id) {
    const item = list[id];
    const status = item.isCompleted;

    item.isCompleted = !status;

    setList([...list]);
  }

  function onAddItem() {
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

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}

      <h2>Pending (active)</h2>
      {list.length > 0 && (
        <ShoppingList list={activeItems} oncChange={oncChange} />
      )}

      {/* We leave here until we add the toggle items button */}
      <h2>Completed (archived)</h2>
      <ShoppingList list={inactiveItems} oncChange={oncChange} />

      <button onClick={onAddItem}>Add a new item</button>
    </div>
  );
}
