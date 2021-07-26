export default function Checkbox({ value, onChange }) {
  // Methods
  function toggleCheck(value) {
    const newStatus = !value;

    onChange("acquired", newStatus);
  }

  return (
    <label className="custom-checkbox">
      <input
        defaultChecked={value}
        onChange={() => toggleCheck(value)}
        type="checkbox"
      />
      <div className={`icon-checkmark ${value && "checked"}`}></div>
    </label>
  );
}
