// NPM Packages
import { useRecoilValue, useRecoilState } from "recoil";

// Project files
import ButtonCreateItem from "../components/ButtonCreateItem";
import ButtonToggleAcquiredList from "../components/ButtonToggleAcquiredList";
import SortControls from "../components/SortControls";
import ShoppingList from "../components/ShoppingList";
import { listState } from "../state/listState";
import { completedState } from "../state/completedState";
import firebase from "../firebase";
import dataURLToFile from "../js/dataURLToFile";
import uploadFileToFirebase from "../js/uploadFileToFirebase";

export default function NormalState() {
  // Global state
  const [list, setList] = useRecoilState(listState);
  const showAcquired = useRecoilValue(completedState);

  // Constants
  const activeList = list.filter((item) => item.isCompleted === false);
  const inactiveList = list.filter((item) => item.isCompleted === true);

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

  function editList(editedItem) {}

  return (
    <div id="normal-page">
      <h1>Shopping list</h1>

      {/* Sorting controls */}
      <SortControls />

      {/* Pending items */}
      <ShoppingList list={activeList} editList={editList} />

      {/* Main controls */}
      <ButtonCreateItem />
      <br />
      <ButtonToggleAcquiredList />

      {/* Acquired items */}
      {showAcquired && <ShoppingList list={inactiveList} editList={editList} />}
    </div>
  );
}
