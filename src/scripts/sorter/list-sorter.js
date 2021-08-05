export function sortByString(array, key) {
  console.log("sortByString() sorting by", key);
  console.log("sortByString() original array", array);

  const sortedList = [...array].sort((a, b) => {
    // make the strings case insensitive
    const stringA = a[key].toUpperCase();
    const stringB = b[key].toUpperCase();

    return stringA > stringB ? 1 : -1;
  });
  console.log("sortByString() edited array", sortedList);
  return sortedList;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}
