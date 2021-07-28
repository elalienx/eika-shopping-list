// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";

export default function ButtonToggle({ status, onClick }) {
  // Constants
  const ImageCloseEye = <img src={IconOpenEye} alt="An open eye icon" />;
  const ImageOpenEye = <img src={IconCloseEye} alt="A close eye icon" />;

  return (
    <button className="button-secondary" onClick={onClick}>
      {status ? ImageOpenEye : ImageCloseEye}
      <span>{status ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
