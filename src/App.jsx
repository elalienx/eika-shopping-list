// NPM Packages
import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import WelcomeScreen from "./screens/WelcomeScreen";
import NormalScreen from "./screens/NormalScreen";
import STORAGE_KEY from "./scripts/storageKey";
import { listState } from "./state/listState";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  const loadData = (storageKey) => {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    return parsedData;
  };

  const saveData = useCallback((storageKey, list) => {
    const stringifyList = JSON.stringify(list);

    localStorage.setItem(storageKey, stringifyList);
  }, []);

  useEffect(() => setList(loadData(STORAGE_KEY)), [setList]);
  useEffect(() => saveData(STORAGE_KEY, list), [saveData, list]);

  return (
    <div className="App">
      <header>
        <img src={Logo} className="logo" alt="Company logo" />
      </header>

      {list.length === 0 ? <WelcomeScreen /> : <NormalScreen />}
    </div>
  );
}
