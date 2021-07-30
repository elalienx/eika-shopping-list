export function sortByString(array, key) {
  console.log("key", key);
  console.log("old list", array);
  const sortedList = [...array].sort(
    (a, b) => a[key].toLowerCase() > b[key].toLowerCase()
  );
  console.log("new list", sortedList);

  sortedList[0].name = "hello world";

  return sortedList;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}
