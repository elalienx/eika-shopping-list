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
import { storageKey } from "./state/storageKey";
import "./css/style.css";

export default function App() {
  // External state
  const [list, setList] = useRecoilState(listState);
  const showCompleted = useRecoilValue(completedState);

  // Constants
  const activeItems = list.filter((item) => item.isCompleted === false);
  const inactiveItems = list.filter((item) => item.isCompleted === true);

  // Methods
  useEffect(() => {
    const storedList = window.localStorage.getItem(storageKey);

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
        <ShoppingList className="active-items" list={activeItems} />
      )}

      <ListControls />

      {showCompleted && (
        <ShoppingList className="inactive-items" list={inactiveItems} />
      )}
    </div>
  );
}
