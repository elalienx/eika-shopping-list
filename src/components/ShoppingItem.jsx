export default function ShoppingItem({ item, onUpdate }) {
  // Properties
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
