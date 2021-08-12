// NPM Packages
import React, { useContext, useReducer } from "react";

// Project files
import listReducer from "./listReducer";

// Properties
const ListContext = React.createContext(null);

export function ListProvider(props) {
  // Global state
  const [list, dispatch] = useReducer(listReducer, []);

  return (
    <ListContext.Provider value={{ list, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);

  return context;
}
