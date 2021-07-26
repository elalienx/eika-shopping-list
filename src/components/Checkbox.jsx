export default function Checkbox({ value, onClick }) {
  // Methods
  function toggleCheck(value) {
    const newStatus = !value;

    onClick("acquired", newStatus);
  }

  return (
    <label className="custom-checkbox">
      <input
        defaultChecked={value}
        onClick={() => toggleCheck(value)}
        type="checkbox"
      />
      <div className={`icon-checkmark ${value && "checked"}`}></div>
    </label>
  );
}
