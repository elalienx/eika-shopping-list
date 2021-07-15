export default function ShoppingItem({ item, updateItem }) {
  // Constants
  const { id, name, price, isCompleted } = item;

  return (
    <article className="shopping-item">
      <label className="custom-checkbox">
        <input
          checked={isCompleted}
          onChange={() => updateItem(id)}
          type="checkbox"
        />
        <div className="icon-checkmark"></div>
      </label>
      <span className={`name ${isCompleted && "checked"}`}>{name}</span>
      <span className="spacer"></span>
      <span className={`price ${isCompleted && "checked"}`}>{price}sek</span>
    </article>
  );
}
