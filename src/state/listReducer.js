// Project files
import requestNewItem from "../scripts/create-item/requestNewItem";

// Pending, think about the best way to sort the list

export default function listReducer(state, action) {
  switch (action.type) {
    case "createItem":
      return createItem(state);
    case "editItem":
      return editItem(state, action);
  }
}

function createItem(state) {
  const newId = state.length;
  const newItem = requestNewItem(newId);

  return [...state, newItem];
}

function editItem(state, action) {
  const { editedItem, key, value } = action;
  const index = state.findIndex((item) => item.id === editedItem.id);
  const clonedState = [...state];

  clonedState[index][key] = value;

  return clonedState;
}
