// Project files
import Checkbox from "./Checkbox";
import { useList } from "../state/ListProvider";
import ImageChooser from "./ImageChooser";

export default function ShoppingItem({ item }) {
  // Global state
  const { dispatch } = useList();

  // Constants
  const { name, price, acquired, imageURL } = item;

  // Methods
  function editedItem(item, key, value) {
    const editedItem = item;

    editedItem[key] = value;
    dispatch({ type: "editItem", editedItem });
  }

  return (
    <article className={`shopping-item ${acquired && "checked"}`}>
      <Checkbox
        checked={acquired}
        onChange={() => editedItem(item, "acquired", !acquired)}
      />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
      <ImageChooser
        imageURL={imageURL}
        onChange={(imageURL) => editedItem(item, "imageURL", imageURL)}
      />
    </article>
  );
}
