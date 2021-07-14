// NPM Packages
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import EmptyState from "./components/EmptyState";
import ShoppingList from "./components/ShoppingList";
import ListControls from "./components/ListControls";
import { completedState } from "./state/completedState";
import { listState } from "./state/listState";
import "./css/style.css";

export default function App() {
  // External state
  const [list, setList] = useRecoilState(listState);
  const showCompleted = useRecoilValue(completedState);

  // Constants
  const STORAGE_KEY = "eika-shopping-list";
  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  function updateItem(id) {
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));
    const status = updateList[index].isCompleted;

    updateList[index].isCompleted = !status;

    setList(updateList);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  useEffect(() => {
    const storedList = window.localStorage.getItem(STORAGE_KEY);

    if (storedList !== null) {
      const parsedList = JSON.parse(storedList);
      setList(parsedList);
    }
  }, [setList]);

  return (
    <div className="App">
      <nav>
        <img
          src={Logo}
          className="logo"
          alt="The word EIKA written on a yellow and blue background"
        />
      </nav>

      {activeItems.length === 0 && <EmptyState />}
      {activeItems.length > 0 && <h1>Shopping list</h1>}
      {activeItems.length > 0 && (
        <ShoppingList
          className="active-items"
          list={activeItems}
          onUpdate={updateItem}
        />
      )}

      <ListControls storageKey={STORAGE_KEY} />

      {showCompleted && (
        <ShoppingList
          className="inactive-items"
          list={inactiveItems}
          onUpdate={updateItem}
        />
      )}
    </div>
  );
}
