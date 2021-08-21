// Project files
import { useState } from "react";
import { sortByNumber, sortByString } from "../scripts/sorter/list-sorter";
import { useList } from "../state/ListProvider";

export default function Sorter() {
  // Local state
  const [activeButton, setActiveButton] = useState("");

  // Global state
  const { list, dispatch } = useList();

  // Methods
  function sortyListByName(list, key) {
    const sortedList = sortByString(list, key);

    setActiveButton("name");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  function sortListByPrice(list, key) {
    const sortedList = sortByNumber(list, key);

    setActiveButton(key);
    dispatch({ type: "replaceList", editedList: sortedList });
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
