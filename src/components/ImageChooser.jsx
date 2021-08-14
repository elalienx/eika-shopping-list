// Project files
import Placeholder from "../assets/images/image-placeholder.png";

export default function ImageChooser({ imageURL, editItem }) {
  // Constants
  const Image = imageURL === "" ? Placeholder : imageURL;

  function uploadImage(event) {
    const image = uploadImage()
  }

  // Methods
  return (
    <label className="custom-file-chooser">
      <input onChange={uploadImage} type="file" />
      <img src={Image} alt="User generated content" />
    </label>
  );
}
