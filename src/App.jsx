// NPM Packages
import { useEffect } from "react";

// Project files
import Logo from "./assets/images/logo.svg";
import NormalScreen from "./screens/NormalScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import STORAGE_KEY from "./scripts/storageKey";
import { ListProvider } from "./state/ListProvider";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function loadData(storageKey, setList) {
    const data = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(data) ?? [];

    setList(parsedData);
  }

  function saveData(storageKey, list) {
    const stringifyList = JSON.stringify(list);

    localStorage.setItem(storageKey, stringifyList);
  }

  useEffect(() => loadData(STORAGE_KEY, setList), []);
  useEffect(() => saveData(STORAGE_KEY, list), [list]);

  return (
    <ListProvider>
      <div className="App">
        <header>
          <img src={Logo} className="logo" alt="Company logo" />
        </header>

        {list.length === 0 ? <WelcomeScreen /> : <NormalScreen />}
      </div>
    </ListProvider>
  );
}
