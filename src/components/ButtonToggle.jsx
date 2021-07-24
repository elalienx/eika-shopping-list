// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";

export default function ButtonToggle({ status, toggleStatus }) {
  // Constants
  const ImageCloseEye = <img src={IconOpenEye} alt="An open eye icon" />;
  const ImageOpenEye = <img src={IconCloseEye} alt="A close eye icon" />;

  // Methods
  function onClick(currentStatus) {
    const newStatus = !currentStatus;

    toggleStatus(newStatus);
  }

  return (
    <button className="button-secondary" onClick={() => onClick(status)}>
      {status ? ImageOpenEye : ImageCloseEye}
      <span>{status ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
