// Project files
import firebase from "../firebase"; // you are creating a heavy reference in each item?
import dataURLToFile from "../js/dataURLToFile";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";
import uploadFileToFirebase from "../js/uploadFileToFirebase";

export default function ShoppingItem({ item, updateItem }) {
  // Constants
  const { id, name, price, isCompleted } = item;

  // Methods
  // Pure
  async function processImage(event) {
    const file = event.target.files[0];
    const newName = `image-${new Date().getTime()}.png`;

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage);
    const imageForFirebase = await dataURLToFile(resizedImage, newName);
    const imageURL = await uploadFileToFirebase(firebase, imageForFirebase);

    setOriginalImage(originalImage);
    setResizedImage(resizedImage, 80, 80);
    console.log("imageURL", imageURL);
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
    </article>
  );
}
