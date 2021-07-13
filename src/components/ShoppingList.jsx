// Local imports
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list }) {
  // Components
  const List = list.map((item) => <ShoppingItem key={item.id} item={item} />);

  return <section>{List}</section>;
}
