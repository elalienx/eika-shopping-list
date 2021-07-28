// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import ButtonToggle from "../components/ButtonToggle";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
import requestNewItem from "../scripts/requestNewItem";
import { listState } from "../state/listState";

export default function NormalScreen() {
  // Local state
  const [showAcquired, setShowAcquired] = useState(false);

  // Global state
  const [list, setList] = useRecoilState(listState);

  // Constants
  const activeList = list.filter((item) => item.acquired === false);
  const inactiveList = list.filter((item) => item.acquired === true);

  // Methods
  function createItem(newId) {
    const newItem = requestNewItem(newId);

    if (newItem !== null) setList([newItem]);
  }

  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = JSON.parse(JSON.stringify(list));

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <div id="normal-page">
      <h1>Your shopping list</h1>

      {/* Secondary controls */}
      <SortControls />

      {/* Pending list */}
      <ShoppingList list={activeList} editList={editList} />

      {/* Main controls */}
      <button className="button-main" onClick={() => createItem(list.length)}>
        Add a new item
      </button>
      <ButtonToggle
        status={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {/* Acquired list */}
      {showAcquired && <ShoppingList list={inactiveList} editList={editList} />}
    </div>
  );
}
