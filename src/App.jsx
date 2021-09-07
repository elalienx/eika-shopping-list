// NPM Packages
import React from "react";

// Project files
import Logo from "./assets/images/logo.svg";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useList } from "./state/ListProvider";
import "./css/style.css";

export default function App() {
  // Global state
  const { list } = useList();

  return (
    <div className="App">
      <header>
        <img src={Logo} className="logo" alt="Company logo" />
      </header>

      {list.length === 0 ? <WelcomeScreen /> : <ShoppingScreen />}
    </div>
  );
}
