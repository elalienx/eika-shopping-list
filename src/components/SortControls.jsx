// NPM Packages
import { useState } from "react";
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import { sortByNumber, sortByString } from "../scripts/sorter/list-sorter";

export default function SortControls() {
  // Local state
  const [activeButton, setActiveButton] = useState("");

  // Global state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function sortyListByName(list, key) {
    console.log("sortyListByName, old list", list);
    const sortedList = [...list].sort(
      (a, b) => a[key].toLowerCase() > b[key].toLowerCase()
    );
    console.log("sortyListByName, new list", sortedList);

    setActiveButton("name");
    setList(sortedList);
  }

  function sortListByPrice(list, key) {
    const sortedList = sortByNumber(list, key);

    setActiveButton(key);
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
      <span className="label">Sort by:</span>
      <button
        className={`button-toggle ${activeButton === "name" ? "active" : ""}`}
        onClick={() => sortyListByName(list, "name")}
      >
        Name
      </button>
      <button
        className={`button-toggle ${activeButton === "price" ? "active" : ""}`}
        onClick={() => sortListByPrice(list, "price")}
      >
        Price
      </button>
    </section>
  );
}
