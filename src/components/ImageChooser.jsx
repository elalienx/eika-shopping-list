// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import { uploadImage } from "../scripts/upload-image";

export default function ImageChooser({ imageURL, onChange }) {
  // Constants
  console.log(imageURL);
  const Image = imageURL === "" ? Placeholder : imageURL;

  async function onEvent(event) {
    const imageURL = await uploadImage(event);

    onChange(imageURL);
  }

  // Methods
  return (
    <label className="custom-file-chooser">
      <input onChange={(event) => onEvent(event)} type="file" />
      <img src={Image} alt="User generated content" />
    </label>
  );
}
