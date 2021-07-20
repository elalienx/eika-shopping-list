export default function Checkbox({ isCompleted, editItem }) {
  return (
    <label className="custom-checkbox">
      <input
        checked={isCompleted}
        onChange={editItem("isCompleted", !isCompleted)}
        type="checkbox"
      />
      <div className={`icon-checkmark ${isCompleted && "checked"}`}></div>
    </label>
  );
}
