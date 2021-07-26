// Project files
import ImageChooser from "./ImageChooser";
import Checkbox from "./Checkbox";

export default function ShoppingItem({ item, editList }) {
  // Constants
  const { name, price, acquired, imageURL } = item;

  // Methods
  function editItem(key, editedValue) {
    const editedItem = { ...item };

    editedItem[key] = editedValue;
    editList(editedItem);
  }

  return (
    <article className={`shopping-item ${acquired && "checked"}`}>
      <Checkbox value={acquired} onClick={editItem} />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
      <ImageChooser imageURL={imageURL} editItem={editItem} />
    </article>
  );
}
