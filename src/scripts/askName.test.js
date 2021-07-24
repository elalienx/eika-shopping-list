// Project files
import askName from "./askName";

test("returns null if value is empty", () => {
  // Arrange
  window.prompt = jest.fn().mockImplementation(() => "");

  // Act
  const name = askName();
  const result = null;

  // Assert
  expect(name).toBe(result);
});

test("rreturns null if undenided", () => {
  // Arrange
  window.prompt = jest.fn().mockImplementation(() => undefined);

  // Act
  const name = askName();
  const result = null;

  // Assert
  expect(name).toBe(result);
});

test("returns null if there multiple empty spaces", () => {
  // Arrange
  const faultyEmptySpace = "              "; // empty spaces with space bar and tab on purpose
  window.prompt = jest.fn().mockImplementation(() => faultyEmptySpace);

  // Act
  const name = askName();
  const result = null;

  // Assert
  expect(name).toBe(result);
});

test("returns Eduardo withouth spaces", () => {
  // Arrange
  window.prompt = jest.fn().mockImplementation(() => " Eduardo ");

  // Act
  const name = askName();
  const result = "Eduardo";

  // Assert
  expect(name).toBe(result);
});

// returns Eduardo
test("returns Eduardo", () => {
  // Arrange
  window.prompt = jest.fn().mockImplementation(() => "Eduardo");

  // Act
  const name = askName();
  const result = "Eduardo";

  // Assert
  expect(name).toBe(result);
});
