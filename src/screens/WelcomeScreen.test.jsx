// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import WelcomeScreen from "./WelcomeScreen";
import requestItem from "../scripts/requestNewItem";
jest.mock("../scripts/requestNewItem");

test("creates item when user press the button", async () => {
  // Arrange
  render(
    <RecoilRoot>
      <WelcomeScreen />
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

  fireEvent.click(buttonElement);

  // Assert
  expect(requestItem).toHaveBeenCalledTimes(1); // to verify if our React component call this external module method
});
