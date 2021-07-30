import { sortByNumber, sortByString } from "./list-sorter";

// To do
// Should throw an error if key does not exist

test("Should sort list using a key called name that is a string", () => {
  // Arrange
  const mockKey = "name";
  const mockArray = [
    { id: 3, name: "Beta", price: 100 },
    { id: 1, name: "Charlie", price: 500 },
    { id: 2, name: "Alfa", price: 900 },
  ];
  const result = [
    { id: 2, name: "Alfa", price: 900 },
    { id: 3, name: "Beta", price: 100 },
    { id: 1, name: "Charlie", price: 500 },
  ];
  // Act
  const test = sortByString(mockArray, mockKey);
  const testToString = JSON.stringify(test);
  const resultToString = JSON.stringify(result);

  // Assert
  expect(testToString).toEqual(resultToString);
});

test("Should sort list using a key called price that is a number", () => {
  // Arrange
  const mockKey = "price";
  const mockArray = [
    { id: 2, name: "Alfa", price: 900 },
    { id: 3, name: "Beta", price: 100 },
    { id: 1, name: "Charlie", price: 500 },
  ];
  const result = [
    { id: 3, name: "Beta", price: 100 },
    { id: 1, name: "Charlie", price: 500 },
    { id: 2, name: "Alfa", price: 900 },
  ];
  // Act
  const test = sortByNumber(mockArray, mockKey);
  const testToString = JSON.stringify(test);
  const resultToString = JSON.stringify(result);

  // Assert
  expect(testToString).toEqual(resultToString);
});
