// Project files
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, onUpdate }) {
  // Components
  const List = list.map((item) => (
    <ShoppingItem key={item.id} item={item} onUpdate={onUpdate} />
  ));

  return (
    <section>
      {list.length > 0 ? List : <span>No items to show...</span>}
    </section>
  );
}
