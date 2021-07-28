// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import NormalScreen from "./NormalScreen";
import requestItem from "../scripts/requestNewItem";
jest.mock("../scripts/requestNewItem");

test("creates item when user press the button", async () => {
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

test("dont create a new item when the user cancel the creation", async () => {
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
