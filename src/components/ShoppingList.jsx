// Local imports
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, markAsComplete }) {
  // Components
  const List = list.map((item) => (
    <ShoppingItem key={item.id} item={item} markAsComplete={markAsComplete} />
  ));

  return <section>{List}</section>;
}
