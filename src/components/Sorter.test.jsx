// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import { sortByString, sortByNumber } from "../scripts/sorter/list-sorter";
import { ListProvider } from "../state/ListProvider";
import Sorter from "./Sorter";
jest.mock("../scripts/sorter/list-sorter");

beforeEach(() => {
  window.localStorage.clear();
});

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

test("Should call the sortByNumber function", async () => {
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
