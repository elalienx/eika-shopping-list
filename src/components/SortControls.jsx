// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import { listState } from "../state/listState";
import { sortState } from "../state/sortState";

export default function SortControls() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const [sort, setSort] = useRecoilState(sortState);

  // Methods
  // Pure but void
  function sortyListByName(list) {
    const sortedList = [...list].sort(
      (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
    );

    setSort("name");
    setList(sortedList);
  }

  // Pure but void
  function sortListByPrice(list) {
    const sortedList = [...list].sort((a, b) => a.price - b.price);

    setSort("price");
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
      <span className="label">Sort by:</span>
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
