// Core
import { useState } from "react";

// Local imports
import DummyData from "./dummyData.json";
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  // Local state
  const [list, setList] = useState(DummyData);

  // Methods
  function oncChange(id) {
    const item = list[id];
    const status = item.isCompleted;

    item.isCompleted = !status;

    setList((previousArray) => [...previousArray]);
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}
      {list.length > 0 && <ShoppingList list={list} oncChange={oncChange} />}
    </div>
  );
}
