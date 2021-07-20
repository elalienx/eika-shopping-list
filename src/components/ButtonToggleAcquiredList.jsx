// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";
import { completedState } from "../state/completedState";

export default function ButtonToggleAcquiredList() {
  // Global state
  const [showCompleted, setShowCompleted] = useRecoilState(completedState);

  // Methods
  // Pure
  function toggleAcquiredList() {
    setShowCompleted(!showCompleted);
  }

  // Constants
  const ImageCloseEye = <img src={IconOpenEye} alt="An open eye icon" />;
  const ImageOpenEye = <img src={IconCloseEye} alt="A close eye icon" />;

  return (
    <button className="button-secondary" onClick={toggleAcquiredList}>
      {showCompleted ? ImageCloseEye : ImageOpenEye}
      <span>{showCompleted ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
