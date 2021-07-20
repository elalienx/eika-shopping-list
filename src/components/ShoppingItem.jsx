// Project files
import Checkbox from "./Checkbox";
import ImageChooser from "./ImageChooser";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, editList }) {
  // Constants
  const { id, name, price, isCompleted, thumbnail } = item;

  // Methods
  async function processImage(event, id, updateImage) {
    const file = event.target.files[0];
    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage);

    updateImage(id, resizedImage);
  }

  function editItem(key, editedValue) {
    const editedItem = Object.assign(item, { [key]: editedValue });

    editList(editedItem); // <= this one should below to the external state instead of a React component
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
