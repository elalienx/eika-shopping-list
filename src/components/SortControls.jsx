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
  function sortyListByName(list) {
    const updateList = JSON.parse(JSON.stringify(list));
    const sortedList = updateList.sort(
      (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
    );

    setSort("name");
    saveInformation(sortedList, storageKey);
  }

  function sortListByPrice(list) {
    const updateList = JSON.parse(JSON.stringify(list));
    const sortedList = updateList.sort((a, b) => a.price - b.price);

    setSort("price");
    saveInformation(sortedList, storageKey);
  }

  function saveInformation(list, storageKey) {
    setList(list);
    window.localStorage.setItem(storageKey, JSON.stringify(list));
  }

  return (
    <section className="sorter-controls">
      Sort by:
      <button
        className={`button-toggle ${sort === "name" && "active"}`}
        onClick={() => sortyListByName(list)}
      >
        Name
      </button>
      <button
        className={`button-toggle ${sort === "price" && "active"}`}
        onClick={() => sortListByPrice(list)}
      >
        Price
      </button>
    </section>
  );
}
