export function sortByString(array, key) {
  console.log("oldArray ", array);
  const clonedArray = JSON.parse(JSON.stringify(array));
  const newArray = clonedArray.sort((a, b) => a.name > b.name);

  console.log("newArray", newArray);

  return newArray;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}
