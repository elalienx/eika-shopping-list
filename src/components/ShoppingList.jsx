// Local imports
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(list) {
  // Properties
  const List = list.map((item, index) => (
    <ShoppingItem key={index} item={item} />
  ));

  return <section>{List}</section>;
}
