export function sortByString(array, key) {
  const sortedList = [...array].sort((a, b) => {
    // we upper case to ignore upper and lowercase
    const stringA = a[key].toUpperCase();
    const stringB = b[key].toUpperCase();

    if (stringA < stringB) return -1;
    if (stringA > stringB) return 1;

    // names must be equal
    return 0;
  });

  return sortedList;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}
