export function sortByString(array, key) {
  console.log("oldArray ", array);

  const sortedList = [...array].sort((a, b) => {
    console.log(`Is ${a.name} greater than ${b.name}? ${a.name > b.name}`);

    a.name > b.name;
  });

  console.log("newArray", sortedList);

  return sortedList;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}
