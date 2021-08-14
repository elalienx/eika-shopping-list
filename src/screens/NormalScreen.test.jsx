// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import requestItem from "../scripts/create-item/requestNewItem";
import { ListProvider } from "../state/ListProvider";
import NormalScreen from "./NormalScreen";
jest.mock("../scripts/create-item/requestNewItem");

test("Should have a create item button to start adding items", () => {
  // Arrange
  render(
    <ListProvider>
      <NormalScreen />
    </ListProvider>
  );

  // Assert
  const buttonElement = screen.getByText("Add a new item");

  // Act
  expect(buttonElement).toBeInTheDocument();
});

test("Should create an item item when press the new button", () => {
  // Arrange
  render(
    <ListProvider>
      <NormalScreen />
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
  const nameResult = /Eduardo/i;
  const priceResult = /777/i;
  fireEvent.click(buttonElement);

  // Assert
  expect(requestItem).toHaveBeenCalled(); // to verify if our React component call this external module method
  expect(screen.getByText(nameResult)).toBeInTheDocument();
  expect(screen.getByText(priceResult)).toBeInTheDocument();
});

test("Should create a second item when user press the button twice", () => {
  // Arrange
  render(
    <ListProvider>
      <NormalScreen />
    </ListProvider>
  );

  const fakeItemA = {
    id: 0,
    name: "Sofa",
    price: 777,
    acquired: false,
    imageURL: "",
  };
  const fakeItemB = {
    id: 1,
    name: "TV Stand",
    price: 2500,
    acquired: false,
    imageURL: "",
  };

  // Act
  const buttonElement = screen.getByText("Add a new item");

  // Assert
  requestItem.mockReturnValue(fakeItemA);
  fireEvent.click(buttonElement);
  expect(requestItem).toHaveBeenCalled();
  expect(screen.getByText(/Sofa/i)).toBeInTheDocument();
  expect(screen.getByText(/777/i)).toBeInTheDocument();

  requestItem.mockReturnValue(fakeItemB);
  fireEvent.click(buttonElement);
  expect(requestItem).toHaveBeenCalled();
  expect(screen.getByText(/TV Stand/i)).toBeInTheDocument();
  expect(screen.getByText(/2500/i)).toBeInTheDocument();
});
