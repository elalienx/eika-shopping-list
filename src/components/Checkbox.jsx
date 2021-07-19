export default function Checkbox({ isCompleted, updateIsCompleted }) {
  return (
    <label className="custom-checkbox">
      <input
        checked={isCompleted}
        onChange={updateIsCompleted}
        type="checkbox"
      />
      <div className={`icon-checkmark ${isCompleted && "checked"}`}></div>
    </label>
  );
}
