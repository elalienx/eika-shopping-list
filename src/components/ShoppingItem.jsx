// Project files
import Checkbox from "./Checkbox";
import ImageChooser from "./ImageChooser";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateIsCompleted, updateImage }) {
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
    <article className={`shopping-item ${isCompleted && "checked"}`}>
      <Checkbox
        isCompleted={isCompleted}
        updateIsCompleted={() => updateIsCompleted(id)}
      />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
      <ImageChooser
        thumbnail={thumbnail}
        processImage={(event) => processImage(event, id, updateImage)}
      />
    </article>
  );
}
