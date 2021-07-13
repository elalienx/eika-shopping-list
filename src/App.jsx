// Core
import { useEffect, useState } from "react";

// Local imports
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  // Local state
  const [list, setList] = useState([]);

  // Properties
  const STORAGE_KEY = "eika-shopping-list";
  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  function onCreate() {
    const newId = list.length;
    const newItem = { name: "", price: "", id: newId, isCompleted: false };
    const promptName = prompt("Whats the name of the shopping item?");
    const promptPrice = prompt("Whats its price?");

    if (promptName !== null) newItem.name = promptName;

    // Note: Add some test to verify that the price is just a number
    if (promptPrice !== null) newItem.price = promptPrice;

    const newList = [...list, newItem];

    setList(newList);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  }

  function onUpdate(id) {
    const item = list[id];
    const status = item.isCompleted;

    item.isCompleted = !status;

    setList([...list]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function onDeleteAll() {
    setList([]);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  useEffect(() => {
    const storedList = window.localStorage.getItem(STORAGE_KEY);

    if (storedList !== null) {
      const parsedList = JSON.parse(storedList);
      setList(parsedList);
    }
  }, []);

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}

      <h2>Pending (active)</h2>
      <ShoppingList list={activeItems} onUpdate={onUpdate} />

      {/* We leave here until we add the toggle items button */}
      {/* This will be or next step */}
      <h2>Completed (archived)</h2>
      <ShoppingList list={inactiveItems} onUpdate={onUpdate} />

      <button onClick={onCreate}>Add a new item</button>
      <button onClick={onDeleteAll}>Debug delete all</button>
    </div>
  );
}
