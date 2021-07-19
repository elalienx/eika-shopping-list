// NPM Packages
import { useRecoilValue, useRecoilState } from "recoil";

// Project files
import ListControls from "../components/ListControls";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
import { listState } from "../state/listState";
import { activeListState, inactiveListState } from "../state/listState";
import { completedState } from "../state/completedState";
import { storageKey } from "../state/storageKey";
import firebase from "../firebase";
import dataURLToFile from "../js/dataURLToFile";
import uploadFileToFirebase from "../js/uploadFileToFirebase";

export default function NormalState() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const activeList = useRecoilValue(activeListState);
  const inactiveList = useRecoilValue(inactiveListState);
  const showCompleted = useRecoilValue(completedState);

  // Methods
  // Impure (uses properties outside scope)
  function updateIsCompleted(id) {
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));
    const status = updateList[index].isCompleted;

    updateList[index].isCompleted = !status;
    setList(updateList);
  }

  // Impure, uses firebase outside its scope
  async function updateImage(id, resizedImage) {
    const newName = `image-${new Date().getTime()}.png`;
    const imageForFirebase = await dataURLToFile(resizedImage, newName);
    const imageURL = await uploadFileToFirebase(firebase, imageForFirebase);

    // Refactor we duplicated the code from updatedItem
    const index = list.findIndex((item) => item.id === id);
    const updateList = JSON.parse(JSON.stringify(list));

    updateList[index].thumbnail = imageURL;
    setList(updateList);
  }

  return (
    <div id="normal-page">
      <h1>Shopping list</h1>

      {/* Sorting controls */}
      <SortControls />

      {/* Pending items */}
      <ShoppingList
        list={activeList}
        updateIsCompleted={updateIsCompleted}
        updateImage={updateImage}
      />

      {/* Main controls */}
      <ListControls />

      {/* Completed items */}
      {showCompleted && (
        <ShoppingList
          list={inactiveList}
          updateIsCompleted={updateIsCompleted}
          updateImage={updateImage}
        />
      )}
    </div>
  );
}
