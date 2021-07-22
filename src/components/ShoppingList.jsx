// Project files
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, editList }) {
  // Components
  const List = list.map((item) => (
    <ShoppingItem key={item.id} item={item} editList={editList} />
  ));

  return (
    <section>
      {list.length > 0 ? List : <p>No items to show...</p>}
    </section>
  );
}
