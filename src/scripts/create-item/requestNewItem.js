// Project files
import askName from "./askName";
import askPrice from "./askPrice";

export default function requestNewItem(newId) {
  const name = askName();
  if (name === null) return null;

  const price = askPrice();
  if (price === null) return null;

  const newItem = {
    id: newId,
    name: name,
    price: price,
    acquired: false,
    imageURL: "",
  };

  return newItem;
}
