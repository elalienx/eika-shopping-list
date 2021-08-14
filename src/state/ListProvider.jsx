// NPM Packages
import React, { useContext, useEffect, useReducer } from "react";

// Project files
import STORAGE_KEY from "../scripts/storageKey";
import listReducer from "./listReducer";

// Properties
const ListContext = React.createContext(null);
const loadList = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

export function ListProvider(props) {
  // Global state
  const [list, dispatch] = useReducer(listReducer, loadList);

  // Methods
  useEffect(
    () => localStorage.setItem(STORAGE_KEY, JSON.stringify(list)),
    [list]
  );

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
