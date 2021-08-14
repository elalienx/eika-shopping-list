export default function listReducer(state, action) {
  switch (action.type) {
    case "addItem":
      return addItem(state, action);
    case "editItem":
      return editItem(state, action);
    case "replaceList":
      return replaceList(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

// Item modification
function addItem(state, action) {
  const { item } = action;

  if (item !== null) return [...state, item];
  return state;
}

function editItem(state, action) {
  const { editedItem, key, value } = action;
  const index = state.findIndex((item) => item.id === editedItem.id);
  const clonedState = [...state];

  clonedState[index][key] = value;
  return clonedState;
}

// List modification
function replaceList(state, action) {
  const { list } = action;

  return list;
}
