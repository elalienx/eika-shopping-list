// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import dataURLToFile from "../js/dataURLToFile";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";
import uploadFileToFirebase from "../js/uploadFileToFirebase";
import firebase from "../firebase";

export default function ImageChooser({ thumbnail, editItem }) {
  // Constants
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;

  // Methods
  async function uploadImage(event, editItem, key) {
    const file = event.target.files[0];
    const filename = `thumbnail-${new Date().getTime()}.png`;
    const originalImage = await readImage(file);
    const resizedImaged = await resizeImage(originalImage, 80, 80);
    const imageForFirebase = await dataURLToFile(resizedImaged, filename);
    const imageURL = await uploadFileToFirebase(firebase, imageForFirebase);

    editItem(key, imageURL);
  }

  return (
    <label className="custom-file-chooser">
      <input
        onChange={(event) => uploadImage(event, editItem, "thumbnail")}
        type="file"
      />
      <img src={finalImage} alt="User generated content" />
    </label>
  );
}
