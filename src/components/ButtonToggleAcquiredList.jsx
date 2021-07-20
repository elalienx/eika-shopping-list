// NPM Packages
import { useRecoilState } from "recoil";

// Project files
import IconOpenEye from "../assets/images/eye-open.svg";
import IconCloseEye from "../assets/images/eye-close.svg";
import { acquiredState } from "../state/acquiredState";

export default function ButtonToggleAcquiredList() {
  // Global state
  const [showAcquired, setShowAcquired] = useRecoilState(acquiredState);

  // Methods
  // Pure but void
  function toggleAcquiredList() {
    setShowAcquired(!showAcquired);
  }

  // Constants
  const ImageCloseEye = <img src={IconOpenEye} alt="An open eye icon" />;
  const ImageOpenEye = <img src={IconCloseEye} alt="A close eye icon" />;

  return (
    <button className="button-secondary" onClick={toggleAcquiredList}>
      {showAcquired ? ImageOpenEye : ImageCloseEye}
      <span>{showAcquired ? "Hide" : "View"} acquired items</span>
    </button>
  );
}
