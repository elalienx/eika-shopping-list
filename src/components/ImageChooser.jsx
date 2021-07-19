// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import readImage from "../js/readImage";
import resizeImage from "../js/resizeImage";

export default function ImageChooser({ id, thumbnail, myUpdateImage }) {
  // Constants
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;
  const uniqueID = `image-chooser-${id}`;

  // Methods
  async function processImage(event, id, myUpdateImage) {
    console.log("aaa");

    const file = event.target.files[0];
    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage);

    myUpdateImage(id, resizedImage);
  }

  return (
    <div className="image-chooser">
      <input
        type="file"
        id={uniqueID}
        onClick={(event) => processImage(event, id, myUpdateImage)}
      />
      <label htmlFor={uniqueID}>
        <img src={finalImage} alt="User generated content" />
      </label>
    </div>
  );
}
