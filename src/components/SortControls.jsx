// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import { sortState } from "../state/sortState";
import { storageKey } from "../state/storageKey";

export default function SortControls() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const [sort, setSort] = useRecoilState(sortState);

  // Methods
  function sortyListByName() {
    const updateList = JSON.parse(JSON.stringify(list));
    const sortedList = updateList.sort((a, b) => a.name > b.name);

    setSort("name");
    setList(sortedList);
    window.localStorage.setItem(storageKey, JSON.stringify(sortedList));
  }

  function sortListByPrice() {
    const updateList = JSON.parse(JSON.stringify(list));
    const sortedList = updateList.sort((a, b) => a.price - b.price);

    setSort("price");
    setList(sortedList);
    window.localStorage.setItem(storageKey, JSON.stringify(sortedList));
  }

  return (
    <section className="sorter-controls">
      Sort by:
      <button
        className={`button-toggle ${sort === "name" && "active"}`}
        onClick={sortyListByName}
      >
        Name
      </button>
      <button
        className={`button-toggle ${sort === "price" && "active"}`}
        onClick={sortListByPrice}
      >
        Price
      </button>
    </section>
  );
}
