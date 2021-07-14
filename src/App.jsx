// NPM Packages
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import EmptyState from "./pages/EmptyState";
import NormalState from "./pages/NormalState";
import { listState, activeListState } from "./state/listState";
import { storageKey } from "./state/storageKey";
import "./css/style.css";

export default function App() {
  // External state
  const [, setList] = useRecoilState(listState);

  // Constants
  const activeList = useRecoilValue(activeListState);

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

      {activeList.length === 0 ? <EmptyState /> : <NormalState />}
    </div>
  );
}
