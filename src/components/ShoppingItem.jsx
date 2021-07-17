// Project files
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateItem, updateImage }) {
  // Constants
  const { id, name, price, isCompleted, thumbnail } = item;

  // Methods
  // Pure
  async function processImage(event, id) {
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
      <input
        type="file"
        accept="image/*"
        onChange={(event) => processImage(event, id)}
      />
      <img src={thumbnail} alt="The item thumbnail" />
    </article>
  );
}
