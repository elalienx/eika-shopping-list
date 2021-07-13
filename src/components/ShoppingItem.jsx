export default function ShoppingItem({ item }) {
  // Properties
  const { id, name, price, isCompleted } = item;

  // Methods
  function onChange() {
    alert(`Item clicked #${id}`);
  }

  return (
    <article>
      <input checked={isCompleted} onChange={onChange} type="checkbox" />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
