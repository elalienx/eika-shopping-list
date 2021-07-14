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
    console.log(list);

    return list.filter((item) => item.isCompleted === false);
  },
});

export const inactiveListState = selector({
  key: "inactiveList",
  get: ({ get }) => {
    const list = get(listState);

    return list.filter((item) => item.isCompleted === true);
  },
});
