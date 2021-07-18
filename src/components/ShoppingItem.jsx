// Project files
import ImageChooser from "./ImageChooser";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateItem, updateImage }) {
  // Constants
  const { id, name, price, isCompleted, thumbnail } = item;

  // Methods
  // Impure is using the id outside scope
  async function processImage(event, id) {
    console.log("ShoppingItem processImage", event, id);

    const file = event.target.files[0];
    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 80, 80);

    updateImage(id, resizedImage);
  }

  return (
    <article className="shopping-item">
      <label className="custom-checkbox">
        <input
          checked={isCompleted}
          onChange={() => updateItem(id)}
          type="checkbox"
        />
        <div className="icon-checkmark"></div>
      </label>
      <span className={`name ${isCompleted && "checked"}`}>{name}</span>
      <span className="spacer"></span>
      <span className={`price ${isCompleted && "checked"}`}>{price}sek</span>

      {/* Image uploader */}
      <ImageChooser
        myId={id}
        thumbnail={thumbnail}
        processImage={processImage}
      />
    </article>
  );
}
