// NPM Packages
import { useEffect, useState } from "react";

// Project files
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";
import "./css/style.css";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // Constants
  const STORAGE_KEY = "eika-shopping-list";
  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  function onCreate() {
    const newId = list.length;
    const newItem = { name: "", price: "", id: newId, isCompleted: false };

    const promptName = prompt("Whats the name of the shopping item?");
    if (promptName !== null && promptName !== "") newItem.name = promptName;
    else return;

    const promptPrice = prompt("Whats its price?");
    if (promptPrice !== null && promptPrice !== "") newItem.price = promptPrice;
    else return;

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

  function onToggle() {
    setShowCompleted(!showCompleted);
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
      {activeItems.length === 0 && <EmptyState />}

      {activeItems.length > 0 && (
        <section className="active-items">
          <h1>Shopping list</h1>
          <ShoppingList list={activeItems} onUpdate={onUpdate} />
        </section>
      )}

      <section className="list-controls">
        <button className="button-main" onClick={onCreate}>
          Add a new item
        </button>
        <button className="button-secondary" onClick={onToggle}>
          View adquired items
        </button>
      </section>

      {showCompleted && (
        <section className="inactive-items">
          <ShoppingList list={inactiveItems} onUpdate={onUpdate} />
        </section>
      )}
    </div>
  );
}
