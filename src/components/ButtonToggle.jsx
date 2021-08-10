// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";

export default function ButtonToggle({ status, onClick }) {
  // Constants
  const Image = status ? IconCloseEye : IconOpenEye;

  return (
    <button className="button-secondary" onClick={onClick}>
      <img src={Image} alt="An eye that changes between open an close" />
      <span>{status ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
