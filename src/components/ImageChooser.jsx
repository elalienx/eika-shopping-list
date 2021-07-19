// Project files
import Placeholder from "../assets/images/image-placeholder.png";

export default function ImageChooser({ thumbnail, processImage }) {
  // Constants
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;

  return (
    <label className="custom-file-chooser">
      <input onChange={processImage} type="file" />
      <img src={finalImage} alt="User generated content" />
    </label>
  );
}
