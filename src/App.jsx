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

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}

      <h2>Pending</h2>
      {list.length > 0 && (
        <ShoppingList list={activeItems} oncChange={oncChange} />
      )}

      <h2>Completed</h2>
      <ShoppingList list={inactiveItems} oncChange={oncChange} />
    </div>
  );
}
