export default function ShoppingItem({ item, markAsComplete }) {
  // Properties
  const { id, name, price, isCompleted } = item;

  return (
    <article>
      <input
        checked={isCompleted}
        onChange={() => markAsComplete(id)}
        type="checkbox"
      />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
