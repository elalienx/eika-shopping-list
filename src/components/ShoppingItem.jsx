export default function ShoppingItem({ item, markAsComplete }) {
  // Properties
  const { id, name, price, isCompleted } = item;

  // Methods
  function onChange() {
    console.log(`Item clicked #${id}`);
    markAsComplete(id);
  }

  /**
   * The next challenge...
   * how do we move this id back to App.jsx to update the list
   */

  return (
    <article>
      <input checked={isCompleted} onChange={onChange} type="checkbox" />
      <label>{name}</label>
      <span>{price}</span>
    </article>
  );
}
