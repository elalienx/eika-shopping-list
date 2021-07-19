// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateItem, updateImage }) {
  // Constants
  const { id, name, price, isCompleted, thumbnail } = item;
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;
  const uniqueID = `image-chooser-${id}`;

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
      {/* Refactor */}
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
      <span className={`price ${isCompleted && "checked"}`}>{price}:-</span>

      {/* Refactor */}
      <label className="custom-file-chooser">
        <input
          onChange={(event) => processImage(event, id, updateImage)}
          type="file"
        />
        <img src={finalImage} alt="User generated content" />
      </label>
    </article>
  );
}
