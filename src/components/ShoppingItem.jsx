export default function ShoppingItem({ item, onUpdate }) {
  // Constants
  const { id, name, price, isCompleted } = item;

  return (
    <article>
      <input
        checked={isCompleted}
        onChange={() => onUpdate(id)}
        type="checkbox"
      />
      <label>{name}, </label>
      <span>{price}</span>
    </article>
  );
}
