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
  function markAsComplete(id) {
    const completedItem = list[id];

    console.log(completedItem.name);
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}
      {list.length > 0 && (
        <ShoppingList list={list} markAsComplete={markAsComplete} />
      )}
    </div>
  );
}
