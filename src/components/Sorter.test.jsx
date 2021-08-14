// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ListProvider from "../state/ListProvider";
import Sorter from "./Sorter";
import { sortByString, sortByNumber } from "../scripts/sorter/list-sorter";
jest.mock("../scripts/sorter/list-sorter");

test("Should call the sortByString function", async () => {
  // Arrange
  render(
    <ListProvider>
      <Sorter />
    </ListProvider>
  );

  // Act
  const buttonElement = screen.getByText(/name/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(sortByString).toHaveBeenCalledTimes(1); // to verify if our React component call this external module method
});

test("Should cal the sortByNumber function", async () => {
  // Arrange
  render(
    <ListProvider>
      <Sorter />
    </ListProvider>
  );

  // Act
  const buttonElement = screen.getByText(/price/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(sortByNumber).toHaveBeenCalledTimes(1); // to verify if our React component call this external module method
});
