// Project files
import requestNewItem from "../scripts/create-item/requestNewItem";

// Pending, think about the best way to sort the list

export default function listReducer(state, action) {
  switch (action.type) {
    case "createItem":
      return createItem(state, action);
    case "editItem":
      return editItem(state, action);
  }
}

function createItem(state, action) {
  const { newId } = action;
  const newItem = requestNewItem(newId);

  return [...state, newItem];
}

function editItem(state, action) {
  const { editedItem } = action;
  const index = state.findIndex((item) => item.id === editedItem.id);
  const clonedList = [...list];

  clonedList[index] = editedItem;

  return clonedList;
}
