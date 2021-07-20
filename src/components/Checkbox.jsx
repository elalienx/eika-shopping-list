export default function Checkbox({ status, editItem }) {
  // Methods
  // Pure but void
  function toggleCheck(status) {
    const newStatus = !status;
    console.log("old status", status, "newStatus", newStatus);

    editItem("acquired", newStatus);
  }

  return (
    <label className="custom-checkbox">
      <input
        defaultChecked={status}
        onClick={() => toggleCheck(status)}
        type="checkbox"
      />
      <div className={`icon-checkmark ${status && "checked"}`}></div>
    </label>
  );
}
