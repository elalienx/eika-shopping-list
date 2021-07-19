// Project files
import Checkbox from "./Checkbox";
import ImageChooser from "./ImageChooser";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateItem, updateImage }) {
  // Constants
  const { id, name, price, isCompleted, thumbnail } = item;

  // Methods
  // Pure
  async function processImage(event, id, updateImage) {
    const file = event.target.files[0];
    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage);

    updateImage(id, resizedImage);
  }

  return (
    <article className="shopping-item">
      <Checkbox isCompleted={isCompleted} updateItem={() => updateItem(id)} />
      <span className={`name ${isCompleted && "checked"}`}>{name}</span>
      <span className="spacer"></span>
      <span className={`price ${isCompleted && "checked"}`}>{price}:-</span>
      <ImageChooser
        thumbnail={thumbnail}
        processImage={(event) => processImage(event, id, updateImage)}
      />
    </article>
  );
}
