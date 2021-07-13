// Core
import { useState } from "react";

// Local imports
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  // scratch data
  const item1 = { name: "Voxlöv chair", price: 795, isCompleted: false };
  const item2 = { name: "Kipplan sofa", price: 1995, isCompleted: false };
  const item3 = { name: "Morgedal matress", price: 1495, isCompleted: false };
  const item4 = { name: "Bed sheets", price: 79, isCompleted: true };

  // Local state
  const [list, setList] = useState([item1, item2, item3, item4]);

  return (
    <div className="App">
      <h1>Shopping list</h1>

      {list.length === 0 && <EmptyState />}
      {list.length > 0 && <ShoppingList list={list} />}
    </div>
  );
}
