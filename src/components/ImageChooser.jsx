// Project files
import Placeholder from "../assets/images/image-placeholder.png";

export default function ImageChooser({ thumbnail, editItem }) {
  // Constants
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;

  // Methods
  function uploadImage(editKey) {
    // do the firebase thingy here...

    editItem("thumbnail", newThumbnail);
  }

  return (
    <label className="custom-file-chooser">
      <input onChange={() => uploadImage(editItem)} type="file" />
      <img src={finalImage} alt="User generated content" />
    </label>
  );
}
