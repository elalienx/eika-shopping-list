export default function ShoppingItem({ item }) {
  // Properties
  const { name, price, isCompleted } = item;

  // Methods
  function onChange() {
    alert("foo");
  }

  return (
    <article>
      <input type="checkbox" checked={isCompleted} onChange={onChange} />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
