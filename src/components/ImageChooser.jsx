// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import dataURLToFile from "../scripts/upload-image/dataURLToFile";
import firebase from "../scripts/upload-image/firebase";
import readImage from "../scripts/upload-image/readImage";
import resizeImage from "../scripts/upload-image/resizeImage";
import uploadFileToFirebase from "../scripts/upload-image/uploadFileToFirebase";

export default function ImageChooser({ imageURL, editItem }) {
  // Constants
  const Image = imageURL === "" ? Placeholder : imageURL;

  // Methods
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
      <img src={Image} alt="User generated content" />
    </label>
  );
}
