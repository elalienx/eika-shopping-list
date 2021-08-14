// Project files
import Logo from "./assets/images/logo.svg";
import NormalScreen from "./screens/NormalScreen";
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

      {list.length === 0 ? <WelcomeScreen /> : <NormalScreen />}
    </div>
  );
}
