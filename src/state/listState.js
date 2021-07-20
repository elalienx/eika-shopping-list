// NPM Packages
import { atom } from "recoil";
import { storageKey } from "./storageKey";

export const listState = atom({
  key: "listState",
  default: loadData(storageKey),
});

function loadData(storageKey) {
  try {
    const storedList = localStorage.getItem(storageKey);
    const parsedList = JSON.parse(storedList) ?? [];

    return parsedList;
  } catch {
    console.error("The shopping items could not be parsed into JSON");

    return [];
  }
}
