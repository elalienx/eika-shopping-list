// NPM Packages
import { useState } from "react";

// Project files
import ButtonCreateItem from "../components/ButtonCreateItem";
import ButtonToggle from "../components/ButtonToggle";
import ShoppingList from "../components/ShoppingList";
import { useList } from "../state/ListProvider";

export default function NormalScreen() {
  // Local state
  const [showAcquired, setShowAcquired] = useState(false);

  // Global state
  const { list } = useList();

  // Constants
  const acquiredList = list.filter((item) => item.acquired === true);
  const pendingList = list.filter((item) => item.acquired === false);

  return (
    <div id="normal-page">
      <h1>Your shopping list</h1>

      {/* Pending list */}
      <ShoppingList list={pendingList} />

      {/* Main controls */}
      <ButtonCreateItem />
      <ButtonToggle
        status={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {/* Acquired list */}
      {showAcquired && <ShoppingList list={acquiredList} />}
    </div>
  );
}
