export default function ShoppingItem({ item, oncChange }) {
  // Properties
  const { id, name, price, isCompleted } = item;

  return (
    <article>
      <input
        checked={isCompleted}
        onChange={() => oncChange(id)}
        type="checkbox"
      />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
