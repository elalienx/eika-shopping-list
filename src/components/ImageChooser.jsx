// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import dataURLToFile from "../scripts/dataURLToFile";
import readImage from "../scripts/readImage";
import resizeImage from "../scripts/resizeImage";
import uploadFileToFirebase from "../scripts/uploadFileToFirebase";
import firebase from "../firebase";

export default function ImageChooser({ imageURL, editItem }) {
  // Constants
  const finalImage = imageURL === "" ? Placeholder : imageURL;

  // Methods
  // Pure but void
  async function uploadImage(event, editItem, key) {
    const file = event.target.files[0];
    const filename = `image-${new Date().getTime()}.png`;
    const originalImage = await readImage(file);
    const resizedImaged = await resizeImage(originalImage, 80, 80);
    const imageForFirebase = await dataURLToFile(resizedImaged, filename);
    const newImageURL = await uploadFileToFirebase(firebase, imageForFirebase);

    editItem(key, newImageURL);
  }

  return (
    <label className="custom-file-chooser">
      <input
        onChange={(event) => uploadImage(event, editItem, "imageURL")}
        type="file"
      />
      <img src={finalImage} alt="User generated content" />
    </label>
  );
}
