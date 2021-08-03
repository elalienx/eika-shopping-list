// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import ButtonCreateItem from "../components/ButtonCreateItem";
import ButtonToggle from "../components/ButtonToggle";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
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
  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = JSON.parse(JSON.stringify(list)); // spreadlist operator

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
      <ButtonCreateItem />
      <ButtonToggle
        status={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {/* Acquired list */}
      {showAcquired && <ShoppingList list={inactiveList} editList={editList} />}
    </div>
  );
}
