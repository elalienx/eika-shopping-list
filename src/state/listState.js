// NPM Packages
import { atom, selector } from "recoil";
import { storageKey } from "./storageKey";

export const listState = atom({
  key: "listState",
  default: loadData(storageKey),
});

export const activeListState = selector({
  key: "activeList",
  get: ({ get }) => {
    const list = get(listState);
    const filteredList = list.filter((item) => item.isCompleted === false);

    return filteredList;
  },
});

export const inactiveListState = selector({
  key: "inactiveList",
  get: ({ get }) => {
    const list = get(listState);
    const filteredList = list.filter((item) => item.isCompleted === true);

    return filteredList;
  },
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
