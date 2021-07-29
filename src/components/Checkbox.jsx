export default function Checkbox({ value, onChange }) {
  return (
    <label className="custom-checkbox">
      <input defaultChecked={value} onChange={onChange} type="checkbox" />
      <div className={`icon-checkmark ${value && "checked"}`}></div>
    </label>
  );
}
