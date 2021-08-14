// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonCreateItem from "./ButtonCreateItem";
import requestItem from "../scripts/create-item/requestNewItem";
import { ListProvider } from "../state/ListProvider";
jest.mock("../scripts/create-item/requestNewItem");

test("Should call the requestItem function", async () => {
  // Arrange
  render(
    <ListProvider>
      <ButtonCreateItem />
    </ListProvider>
  );
  requestItem.mockReturnValue({
    id: 0,
    name: "Eduardo",
    price: 777,
    acquired: false,
    imageURL: "",
  });

  // Act
  const buttonElement = screen.getByText("Add a new item");

  fireEvent.click(buttonElement);

  // Assert
  expect(requestItem).toHaveBeenCalledTimes(1); // to verify if our React component call this external module method
});
