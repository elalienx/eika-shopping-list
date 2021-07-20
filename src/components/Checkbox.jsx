export default function Checkbox({ acquired, editItem }) {
  function toggleCheck() {
    const newStatus = !acquired;

    editItem("isCompleted", newStatus);
  }

  return (
    <label className="custom-checkbox">
      <input defaultChecked={acquired} onClick={toggleCheck} type="checkbox" />
      <div className={`icon-checkmark ${acquired && "checked"}`}></div>
    </label>
  );
}
