export default function Checkbox({ isCompleted, editItem }) {
  return (
    <label className="custom-checkbox">
      <input
        defaultChecked={isCompleted}
        onChange={editItem("isCompleted", (previous) => !previous)}
        type="checkbox"
      />
      <div className={`icon-checkmark ${isCompleted && "checked"}`}></div>
    </label>
  );
}
