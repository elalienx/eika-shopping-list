// Project files
import requestNewItem from "../scripts/create-item/requestNewItem";

// Pending, think about the best way to sort the list

export default function listReducer(state, action) {
  switch (action.type) {
    case "createItem":
      return createItem(state);
    case "editItem":
      return editItem(state, action);
    case "loadList":
      return [];
    case "saveList":
      return [];
    default:
      throw new Error("No action type found:", action.type);
  }
}

// Item modification
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

// List manipulation


// Storage
function loadList() {

}

function saveList() {
  
}