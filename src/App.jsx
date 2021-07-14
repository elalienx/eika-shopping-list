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

    setList(newList);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  }

  function updateItem(id) {
    const item = list.find((item) => item.id === id);
    const status = item.isCompleted;

    item.isCompleted = !status;
    setList([...list]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function toggleCompleteList() {
    setShowCompleted(!showCompleted);
  }

  function sortyListByName() {
    const sortedList = list.sort((a, b) => a.name > b.name);

    setList([...sortedList]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function sortListByPrice() {
    const sortedList = list.sort((a, b) => a.price - b.price);

    setList([...sortedList]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
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

      {activeItems.length > 0 && <h1>Shopping list</h1>}

      {activeItems.length > 0 && (
        <section className="sorter-controls">
          Sort by:
          <button className="button-toogle" onClick={sortyListByName}>
            Name
          </button>
          <button className="button-toggle" onClick={sortListByPrice}>
            Price
          </button>
        </section>
      )}

      {activeItems.length > 0 && (
        <ShoppingList
          className="active-items"
          list={activeItems}
          onUpdate={updateItem}
        />
      )}

      <section className="list-controls">
        <button className="button-main" onClick={createItem}>
          Add a new item
        </button>
        <button className="button-secondary" onClick={toggleCompleteList}>
          View adquired items
        </button>
      </section>

      {showCompleted && (
        <ShoppingList
          className="inactive-items"
          list={inactiveItems}
          onUpdate={updateItem}
        />
      )}
    </div>
  );
}
