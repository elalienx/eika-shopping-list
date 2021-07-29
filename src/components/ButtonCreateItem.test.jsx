// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import ButtonCreateItem from "./ButtonCreateItem";
import requestItem from "../scripts/requestNewItem";
jest.mock("../scripts/requestNewItem");

test("checks that the main button triggers the request item function", async () => {
  // Arrange
  render(
    <RecoilRoot>
      <ButtonCreateItem />
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
