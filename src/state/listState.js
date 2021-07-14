// NPM Packages
import { atom, selector } from "recoil";

export const listState = atom({
  key: "listState",
  default: [],
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
