export default function Checkbox({ status, editItem }) {
  // Method
  function toggleCheck(status) {
    console.log("checkbox old status", status);
    const newStatus = !status;
    console.log("checkbox new status", newStatus);

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
