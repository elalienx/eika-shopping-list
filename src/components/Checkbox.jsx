export default function Checkbox({ isCompleted, editItem }) {
  function toggleCheck() {
    const newStatus = !isCompleted;

    editItem("isCompleted", newStatus);
  }

  return (
    <label className="custom-checkbox">
      <input
        defaultChecked={isCompleted}
        onClick={toggleCheck}
        type="checkbox"
      />
      <div className={`icon-checkmark ${isCompleted && "checked"}`}></div>
    </label>
  );
}
