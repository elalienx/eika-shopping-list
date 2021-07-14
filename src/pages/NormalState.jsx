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
import { storageKey } from "../state/storageKey";

export default function NormalState() {
  // External state
  const [list, setList] = useRecoilState(listState);
  const activeList = useRecoilValue(activeListState);
  const inactiveList = useRecoilValue(inactiveListState);

  // Methods
  function onUpdate(id) {
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));
    const status = updateList[index].isCompleted;

    updateList[index].isCompleted = !status;

    setList(updateList);
    window.localStorage.setItem(storageKey, JSON.stringify(list));
  }

  return (
    <div>
      <h1>Shopping list</h1>
      <SortControls />
      <ShoppingList
        className="active-items"
        list={activeList}
        onUpdate={onUpdate}
      />
      <ListControls />
      <ShoppingList
        className="inactive-items"
        list={inactiveList}
        onUpdate={onUpdate}
      />
    </div>
  );
}
