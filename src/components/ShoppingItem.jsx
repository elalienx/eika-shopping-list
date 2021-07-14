export default function ShoppingItem({ item, onUpdate }) {
  // Constants
  const { id, name, price, isCompleted } = item;

  return (
    <article className="shopping-item">
      <input
        checked={isCompleted}
        onChange={() => onUpdate(id)}
        type="checkbox"
      />
      <label className="name">{name}</label>
      <span className="spacer"></span>
      <span className="price">{price}sek</span>
    </article>
  );
}
