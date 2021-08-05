import askPrice, { _parseNumber } from "./askPrice";

// _askPrice
test("Should pass on the first time", () => {
  // Arrange
  const mockValue = 10;
  const result = 10;

  window.prompt = jest.fn().mockImplementation(() => mockValue);

  // Act
  const test = askPrice();

  // Assert
  expect(test).toBe(result);
});

test("Should fail on the first and second time, and pass on the third time", () => {
  // Arrange
  const mockValue1 = "hello";
  const mockValue2 = "bye10";
  const mockValue3 = 10;
  const result = 10;

  window.prompt = jest
    .fn()
    .mockReturnValueOnce(mockValue1)
    .mockReturnValueOnce(mockValue2)
    .mockReturnValue(mockValue3);

  // Act
  const name = askPrice();

  // Assert
  expect(name).toBe(result);
});

test("Should return null when user cancel the input", () => {
  // Arrange
  const mockValue = null;
  const result = null;

  window.prompt = jest.fn().mockImplementation(() => mockValue);

  // Act
  const test = askPrice();

  // Assert
  expect(test).toBe(result);
});

// _parseNumber
test("Should return the number withouth alterations when pass a number", () => {
  // Arrange
  const value = 10;
  const result = 10;

  // Act
  const test = _parseNumber(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return the number when pass a string with a valid number inside", () => {
  // Arrange
  const value = "10";
  const result = 10;

  // Act
  const test = _parseNumber(value);

  // Assert
  expect(test).toBe(result);
});

test("Should return NaN when pass a string with letters", () => {
  // Arrange
  const value = "hello";
  const result = NaN;

  // Act
  const test = _parseNumber(value);

  // Assert
  expect(test).toBe(result);
});
