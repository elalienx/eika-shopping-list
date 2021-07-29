// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";

export default function SortControls() {
  // Local state
  const [activeButton, setActiveButton] = useState("");

  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function sortyListByName(list) {
    const sortedList = [...list].sort(
      (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
    );

    setActiveButton("name");
    setList(sortedList);
  }

  function sortListByPrice(list) {
    const sortedList = [...list].sort((a, b) => a.price - b.price);

    setActiveButton("price");
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
      <span className="label">Sort by:</span>
      <button
        className={`button-toggle ${activeButton === "name" ? "active" : ""}`}
        onClick={() => sortyListByName(list)}
      >
        Name
      </button>
      <button
        className={`button-toggle ${activeButton === "price" ? "active" : ""}`}
        onClick={() => sortListByPrice(list)}
      >
        Price
      </button>
    </section>
  );
}
