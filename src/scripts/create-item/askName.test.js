// Project files
import askName, { _isEmpty, _parseString } from "./askName";

// askName
test("should pass on the first time", () => {
  // Arrange
  const mockValue = "Eduardo";
  const result = "Eduardo";

  window.prompt = jest.fn().mockImplementation(() => mockValue);

  // Act
  const test = askName();

  // Assert
  expect(test).toBe(result);
});

test("should fail the first time and second time, then pass the on the third time", () => {
  // Arrange
  const result = "foo";

  window.prompt = jest
    .fn()
    .mockReturnValueOnce("")
    .mockReturnValueOnce("   ")
    .mockReturnValue("foo");

  // Act
  const name = askName();

  // Assert
  expect(name).toBe(result);
});

// _parseString
test("Should return the string back withouth alterations", () => {
  // Arrange
  const value = "foo";
  const result = "foo";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the string back withouth extra spaces", () => {
  // Arrange
  const value = "   foo   "; // the string has on purpose 3 spaces before and after
  const result = "foo";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the empty string withouth alterations", () => {
  // Arrange
  const value = ""; // the string has on purpose 3 spaces before and after
  const result = "";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the empty string withoutg extra spaces", () => {
  // Arrange
  const value = "   "; // the string has on purpose only 3 empty spaces
  const result = "";

  // Act
  const test = _parseString(value);

  // Assert
  expect(test).toBe(result);
});

// _isEmpty
test("Should be true when string is empty", () => {
  // Arrange
  const value = "";
  const result = true;

  // Act
  const test = _isEmpty(value);

  // Assert
  expect(test).toBe(result);
});

test("Should be false when string is not empty", () => {
  // Arrange
  const value = "foo";
  const result = false;

  // Act
  const test = _isEmpty(value);

  // Assert
  expect(test).toBe(result);
});
