// Project files
import dataURLToFile from "./dataURLToFile";
import firebase from "./firebase";
import readImage from "./readImage";
import resizeImage from "./resizeImage";
import uploadFileToFirebase from "./uploadFileToFirebase";

export async function uploadImage(event) {
  const file = event.target.files[0];
  const filename = `image-${new Date().getTime()}.png`;
  const originalImage = await readImage(file);
  const resizedImaged = await resizeImage(originalImage, 80, 80);
  const imageForFirebase = await dataURLToFile(resizedImaged, filename);
  const newImageURL = await uploadFileToFirebase(firebase, imageForFirebase);

  return newImageURL;
}
