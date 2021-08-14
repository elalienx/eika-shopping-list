// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import { ListProvider } from "../state/ListProvider";
import WelcomeScreen from "./WelcomeScreen";

test("Should have a create item button to start adding items", () => {
  // Arrange
  render(
    <ListProvider>
      <WelcomeScreen />
    </ListProvider>
  );

  // Assert
  const buttonElement = screen.getByText("Add a new item");

  // Act
  expect(buttonElement).toBeInTheDocument();
});
