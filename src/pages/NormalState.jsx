// Project files
import ListControls from "../components/ListControls";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";

export default function NormalState() {
  return (
    <div>
      <h1>Shopping list</h1>
      <SortControls />
      <ShoppingList className="active-items" list={activeList} />
      <ListControls />
      <ShoppingList className="inactive-items" list={inactiveList} />
    </div>
  );
}
