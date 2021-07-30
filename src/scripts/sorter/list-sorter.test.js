import { sortByNumber, sortByString } from "./list-sorter";

test("Should sort list using a key called name", () => {
  // Arrange
  const mockKey = "name";
  const mockArray = [
    { id: 3, name: "beta", price: 100 },
    { id: 1, name: "charlie", price: 500 },
    { id: 2, name: "alfa", price: 900 },
  ];
  const result = [
    { id: 2, name: "alfa", price: 900 },
    { id: 3, name: "beta", price: 100 },
    { id: 1, name: "charlie", price: 500 },
  ];
  // Act
  const test = sortByString(mockArray, mockKey);
  const testToString = JSON.stringify(test);
  const resultToString = JSON.stringify(result);

  // Assert
  expect(testToString).toEqual(resultToString);
});

test("Should throw an error if key does not exist", () => {});
