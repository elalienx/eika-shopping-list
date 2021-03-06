// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import NormalScreen from "./NormalScreen";
import requestItem from "../scripts/create-item/requestNewItem";
jest.mock("../scripts/create-item/requestNewItem");

test("Should have a create item button to start adding items", () => {
  // Arrange
  render(
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
  );

  // Assert
  const buttonElement = screen.getByText("Add a new item");

  // Act
  expect(buttonElement).toBeInTheDocument();
});

test("Should create an item item when press the new button", () => {
  // Arrange
  render(
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
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
  const nameResult = "Eduardo";
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
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
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
  expect(screen.getByText("Sofa")).toBeInTheDocument();
  expect(screen.getByText(/777/i)).toBeInTheDocument();

  requestItem.mockReturnValue(fakeItemB);
  fireEvent.click(buttonElement);
  expect(requestItem).toHaveBeenCalled();
  expect(screen.getByText("TV Stand")).toBeInTheDocument();
  expect(screen.getByText(/2500/i)).toBeInTheDocument();
});
