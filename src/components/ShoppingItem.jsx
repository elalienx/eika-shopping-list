// Project files
import Checkbox from "./Checkbox";
import { useList } from "../state/ListProvider";

export default function ShoppingItem({ item }) {
  // Global state
  const { dispatch } = useList();

  // Constants
  const { id, name, price, acquired, imageURL } = item;

  return (
    <article className={`shopping-item ${acquired && "checked"}`}>
      <Checkbox
        checked={acquired}
        onChange={() => dispatch({ type: "editItem", id, acquired: !acquired })}
      />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
    </article>
  );
}
