// NPM Packages
import { atom } from "recoil";

const listState = atom({
  key: "listState",
  default: [],
});

export default listState;
