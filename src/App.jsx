// NPM Packages
import { useEffect } from "react";
import { useRecoilState } from "recoil";

// Project files
import Logo from "./assets/images/logo.svg";
import WelcomePage from "./pages/WelcomePage";
import NormalState from "./pages/NormalPage";
import { listState } from "./state/listState";
import { storageKey } from "./state/storageKey";
import "./css/style.css";

export default function App() {
  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  // Impure
  useEffect(() => {
    const storedList = window.localStorage.getItem(storageKey);

    if (storedList !== null) {
      const parsedList = JSON.parse(storedList);

      setList(parsedList);
    }
  }, [setList]);

  return (
    <div className="App">
      <header>
        <img
          src={Logo}
          className="logo"
          alt="The word EIKA written on a yellow and blue background"
        />
      </header>

      {list.length === 0 ? <EmptyState /> : <WelcomePage />}
    </div>
  );
}
