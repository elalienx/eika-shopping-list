// Project files
import askName from "./askName";
import askPrice from "./askPrice";

export default function requestNewItem(newId) {
  const name = askName();
  if (name === null) return;

  const price = askPrice();
  if (price === null) return;

  const newItem = {
    id: newId,
    name: name,
    price: price,
    acquired: false,
    imageURL: "",
  };

  return newItem;
}
