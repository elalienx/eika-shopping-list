// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import NormalScreen from "./NormalScreen";
import requestItem from "../scripts/create-item/requestNewItem";
jest.mock("../scripts/create-item/requestNewItem");

test("creates item when user press the button", () => {
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

test("creates 2 items when user press the button twice", () => {
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

test("dont create a new item when the user cancel the creation", () => {
  // Arrange
  render(
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
  );
  requestItem.mockReturnValue(null);

  // Act
  const buttonElement = screen.getByText("Add a new item");
  const emptyMessage = /no items to show/i;
  fireEvent.click(buttonElement);

  // Assert
  expect(requestItem).toHaveBeenCalled(); // to verify if our React component call this external module method
  expect(screen.getByText(emptyMessage)).toBeInTheDocument();
});
