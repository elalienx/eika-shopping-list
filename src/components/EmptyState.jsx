// Local imports
import Image from "../assets/images/urban-shopping.png";

export default function EmptyState() {
  return (
    <header>
      <img src={Image} alt="Woman getting out of a store with shopping bags" />
      <h1>Shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add.
      </p>
    </header>
  );
}
