export default function Checkbox({ status, editItem }) {
  // Methods
  function toggleCheck(status) {
    const newStatus = !status;

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
