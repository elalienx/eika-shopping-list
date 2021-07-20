// NPM Packages
import { useRecoilValue, useRecoilState } from "recoil";

// Project files
import ButtonCreateItem from "../components/ButtonCreateItem";
import ButtonToggleAcquiredList from "../components/ButtonToggleAcquiredList";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
import { listState } from "../state/listState";
import { acquiredState } from "../state/acquiredState";

export default function NormalState() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const showAcquired = useRecoilValue(acquiredState);

  // Constants
  const activeList = list.filter((item) => item.acquired === false);
  const inactiveList = list.filter((item) => item.acquired === true);

  // Methods
  // Pure
  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const updateList = JSON.parse(JSON.stringify(list));

    updateList[index] = editedItem;
    setList(updateList);
  }

  return (
    <div id="normal-page">
      <h1>Shopping list</h1>

      {/* Sorting controls */}
      <SortControls />

      {/* Pending items */}
      <ShoppingList list={activeList} editList={editList} />

      {/* Main controls */}
      <ButtonCreateItem />
      <ButtonToggleAcquiredList />

      {/* Acquired items */}
      {showAcquired && <ShoppingList list={inactiveList} editList={editList} />}
    </div>
  );
}
