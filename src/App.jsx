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
  // Impure but innevitable
  const loadData = (storageKey) => {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    return parsedData;
  };

  // Impure but innevitable
  const saveData = useCallback((storageKey, list) => {
    const stringifyList = JSON.stringify(list);

    localStorage.setItem(storageKey, stringifyList);
  }, []);

  useEffect(() => setList(loadData(STORAGE_KEY)), [setList]);
  useEffect(() => saveData(STORAGE_KEY, list), [saveData, list]);

  return (
    <div className="App">
      <header>
        <img src={Logo} className="logo" alt="The company logo" />
      </header>

      {list.length === 0 ? <WelcomePage /> : <NormalPage />}
    </div>
  );
}
