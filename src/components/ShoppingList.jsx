// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import { storageKey } from "../state/storageKey";

// Project files
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList() {
  // External state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function onUpdate(id) {
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));
    const status = updateList[index].isCompleted;

    updateList[index].isCompleted = !status;

    setList(updateList);
    window.localStorage.setItem(storageKey, JSON.stringify(list));
  }

  // Components
  const List = list.map((item) => (
    <ShoppingItem key={item.id} item={item} onUpdate={onUpdate} />
  ));

  return <section>{List}</section>;
}
