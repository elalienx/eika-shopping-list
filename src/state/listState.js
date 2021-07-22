// NPM Packages
import { atom } from "recoil";
import STORAGE_KEY from "../scripts/storageKey";

const listState = atom({
  key: "listState",
  default: _loadData(STORAGE_KEY),
});

function _loadData(storageKey) {
  try {
    const storedList = localStorage.getItem(storageKey);
    const parsedList = JSON.parse(storedList) ?? [];

    return parsedList;
  } catch {
    console.error("The shopping items could not be parsed into JSON");

    return [];
  }
}

export default listState;
