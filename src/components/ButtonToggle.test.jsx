// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonToggle from "./ButtonToggle";

/**
 * Test to do:
 * status:
 * Check that the text is view when status is true
 * Check that the text is hide when the status is false
 *
 * onClick():
 * Check that a function is fired
 */

test("Text says View acquired items when status is false", () => {
  // Arrange
  const fakeStatus = false;
  render(<ButtonToggle status={fakeStatus} />);

  // Act
  const textElement = screen.getByText(/view acquired items/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Text says Hide acquired items when status is true", () => {
  // Arrange
  const fakeStatus = true;
  render(<ButtonToggle status={fakeStatus} />);

  // Act
  const textElement = screen.getByText(/hide acquired items/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
