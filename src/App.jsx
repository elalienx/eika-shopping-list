// NPM Packages
import { useEffect } from "react";
import { useRecoilState } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import WelcomePage from "./pages/WelcomePage";
import NormalPage from "./pages/NormalPage";
import { listState } from "./state/listState";
import { storageKey } from "./state/storageKey";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  // Impure (but innevitable)
  function saveData(storageKey, list) {
    const stringifyList = JSON.stringify(list);

    window.localStorage.setItem(storageKey, stringifyList);
  }

  // Impure
  useEffect(() => {
    saveData(storageKey, list);
  }, [saveData]);

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
