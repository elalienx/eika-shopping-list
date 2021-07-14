// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";

export default function SortControls() {
  // External state
  const [list, setList] = useRecoilState(listState);

  // Methods
  function sortyListByName() {
    const sortedList = list.sort((a, b) => a.name > b.name);

    setSortState("name");
    setList([...sortedList]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function sortListByPrice() {
    const sortedList = list.sort((a, b) => a.price - b.price);

    setSortState("price");
    setList([...sortedList]);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  return (
    <section className="sorter-controls">
      Sort by:
      <button
        className={`button-toggle ${sortState === "name" ? "active" : ""}`}
        onClick={sortyListByName}
      >
        Name
      </button>
      <button
        className={`button-toggle ${sortState ? "price" : "active"}`}
        onClick={sortListByPrice}
      >
        Price
      </button>
    </section>
  );
}
