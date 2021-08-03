// NPM Packages
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import WelcomeScreen from "./WelcomeScreen";

test("Should have a create item button to start adding items", () => {
  // Arrange
  render(
    <RecoilRoot>
      <WelcomeScreen />
    </RecoilRoot>
  );

  // Assert
  const buttonElement = screen.getByText("Add a new item");

  // Act
  expect(buttonElement).toBeInTheDocument();
});
