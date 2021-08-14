// Project files
import requestNewItem from "../scripts/create-item/requestNewItem";

// Pending, think about the best way to sort the list

export default function listReducer(state, action) {
  switch (action.type) {
    case "createItem":
      return createItem(state);
    case "editItem":
      return editItem(state, action);
    case "load":
      return load(action);
    case "save":
      return save(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
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

// Storage
function load(action) {
  console.log("loading...");
  const { key } = action;
  const data = localStorage.getItem(key);
  const list = JSON.parse(data) ?? [];

  console.log("reducer() load() list", list);

  return list;
}

function save(state, action) {
  console.log("saving...");
  console.log("save() state", state);
  const { key } = action;
  const data = JSON.stringify(state);
  console.log("save() data", data);

  localStorage.setItem(key, data);
}
