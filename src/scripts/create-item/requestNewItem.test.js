// Project files
import requestNewItem from "./requestNewItem";

// _askPrice
test("Should return a valid item if the user sends valid information", () => {
  // Arrange
  const mockId = 0;
  const mockName = "Sofa";
  const mockPrice = 500;
  const result = {
    id: 0,
    name: "Sofa",
    price: 500,
    acquired: false,
    imageURL: "",
  };

  window.prompt = jest
    .fn()
    .mockReturnValueOnce(mockName)
    .mockReturnValueOnce(mockPrice);

  // Act
  const test = requestNewItem(mockId);

  // Assert
  expect(test).toStrictEqual(result);
});
