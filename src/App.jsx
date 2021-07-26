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
  const loadData = (storageKey, setList) => {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    setList(parsedData);
  };

  const saveData = useCallback((storageKey, list) => {
    const stringifyList = JSON.stringify(list);

    localStorage.setItem(storageKey, stringifyList);
  }, []);

  useEffect(() => {
    console.log("useEffect for loading data");
    loadData(STORAGE_KEY, setList);
  }, []);
  useEffect(() => {
    console.log("useEffect for saving data");
    saveData(STORAGE_KEY, list);
  }, [list]);

  return (
    <div className="App">
      <header>
        <img src={Logo} className="logo" alt="Company logo" />
      </header>

      {list.length === 0 ? <WelcomeScreen /> : <NormalScreen />}
    </div>
  );
}
