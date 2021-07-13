export default function ShoppingItem({ item }) {
  // Properties
  const { name, price, isCompleted } = item;

  return (
    <article>
      <input type="checkbox" checked={isCompleted} />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
