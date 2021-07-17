// NPM
import { useState } from "react";

// Project files
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ShoppingItem({ item, updateItem, updateImage }) {
  // Local state
  const [resizedImage, setResizedImage] = useState("");

  // Constants
  const { id, name, price, isCompleted } = item;

  // Methods
  // Impure uses the external id
  async function processImage(event) {
    const file = event.target.files[0];

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 80, 80);

    setResizedImage(resizedImage);
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
      <input type="file" accept="image/*" onChange={processImage} />
      <img src={resizedImage} alt="The item thumbnail" />
    </article>
  );
}
