// NPM Packages
import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import WelcomePage from "./pages/WelcomePage";
import NormalPage from "./pages/NormalPage";
import STORAGE_KEY from "./scripts/storageKey";
import listState from "./state/listState";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  // Pure
  const loadData = (storageKey) => {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    return parsedData;
  };

  // Impure but innevitable
  const saveData = useCallback((storageKey, list) => {
    const stringifyList = JSON.stringify(list);

    window.localStorage.setItem(storageKey, stringifyList);
  }, []);

  // Pure but void
  useEffect(() => setList(loadData(STORAGE_KEY)), [setList]);

  // Pure but void
  useEffect(() => saveData(STORAGE_KEY, list), [saveData, list]);

  return (
    <div className="App">
      <header>
        <img
          src={Logo}
          className="logo"
          alt="The word EIKA written on a yellow and blue background"
        />
      </header>

      {list.length === 0 ? <WelcomePage /> : <NormalPage />}
    </div>
  );
}
