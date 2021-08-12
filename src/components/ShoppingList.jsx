// Project files
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list }) {
  // Components
  const List = list.map((item) => <ShoppingItem key={item.id} item={item} />);

  return (
    <section className="shopping-list">
      {list.length > 0 ? List : <p>No items to show...</p>}
    </section>
  );
}
