// Local imports
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, oncChange }) {
  // Components
  const List = list.map((item) => (
    <ShoppingItem key={item.id} item={item} oncChange={oncChange} />
  ));

  return <section>{List}</section>;
}
