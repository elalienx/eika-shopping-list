import Placeholder from "../assets/images/placeholder.png";

export default function ImageChooser({ id, thumbnail, processImage }) {
  const finalImage = thumbnail === "" ? Placeholder : thumbnail;

  return (
    <div className="image-chooser">
      <input
        type="file"
        name="file"
        id="file"
        onChange={(event) => processImage(event, id)}
      />
      <label htmlFor="file">
        <img src={finalImage} alt="User generated content" />
      </label>
    </div>
  );
}
