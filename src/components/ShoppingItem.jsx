// Project files
import ImageChooser from "./ImageChooser";
import Checkbox from "./Checkbox";

export default function ShoppingItem({ item, editList }) {
  // Constants
  const { name, price, isCompleted, thumbnail } = item;

  // Methods
  function editItem(key, editedValue) {
    const editedItem = { ...item };

    editedItem[key] = editedValue;
    editList(editedItem);
  }

  return (
    <article className={`shopping-item ${isCompleted && "checked"}`}>
      <Checkbox isCompleted={isCompleted} editItem={editItem} />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
      <ImageChooser thumbnail={thumbnail} editItem={editItem} />
    </article>
  );
}
