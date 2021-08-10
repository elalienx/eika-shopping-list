// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import ButtonCreateItem from "../components/ButtonCreateItem";
import ButtonToggle from "../components/ButtonToggle";
import ShoppingList from "../components/ShoppingList";
import Sorter from "../components/Sorter";
import { listState } from "../state/listState";

export default function NormalScreen() {
  // Local state
  const [showAcquired, setShowAcquired] = useState(false);

  // Global state
  const [list, setList] = useRecoilState(listState);

  // Constants
  const acquiredList = list.filter((item) => item.acquired === true);
  const pendingList = list.filter((item) => item.acquired === false);

  // Methods
  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = [...list];

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <div id="normal-page">
      <h1>Your shopping list</h1>

      {/* Secondary controls */}
      <Sorter />

      {/* Pending list */}
      <ShoppingList list={pendingList} editList={editList} />

      {/* Main controls */}
      <ButtonCreateItem />
      <ButtonToggle
        status={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {/* Acquired list */}
      {showAcquired && <ShoppingList list={acquiredList} editList={editList} />}
    </div>
  );
}
