export default function Checkbox({ isCompleted, updateItem }) {
  return (
    <label className="custom-checkbox">
      <input checked={isCompleted} onChange={updateItem} type="checkbox" />
      <div className={`icon-checkmark ${isCompleted && "checked"}`}></div>
    </label>
  );
}
