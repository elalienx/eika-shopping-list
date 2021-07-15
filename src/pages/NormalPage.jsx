// NPM Packages
import { useRecoilValue, useRecoilState } from "recoil";

// Project files
import ListControls from "../components/ListControls";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
import {
  listState,
  activeListState,
  inactiveListState,
} from "../state/listState";
import { completedState } from "../state/completedState";
import { storageKey } from "../state/storageKey";

export default function NormalState() {
  // External state
  const [list, setList] = useRecoilState(listState);
  const activeList = useRecoilValue(activeListState);
  const inactiveList = useRecoilValue(inactiveListState);
  const showCompleted = useRecoilValue(completedState);

  // Methods
  function onUpdate(id) {
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));
    const status = updateList[index].isCompleted;

    updateList[index].isCompleted = !status;
    setList(updateList);
    window.localStorage.setItem(storageKey, JSON.stringify(updateList));
  }

  return (
    <div id="normal-page">
      <h1>Shopping list</h1>

      {/* Sorting controls */}
      <SortControls />

      {/* Pending items */}
      <ShoppingList list={activeList} onUpdate={onUpdate} />

      {/* Main controls */}
      <ListControls />

      {/* Completed items */}
      {showCompleted && (
        <ShoppingList list={inactiveList} onUpdate={onUpdate} />
      )}
    </div>
  );
}
