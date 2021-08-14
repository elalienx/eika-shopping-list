// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";
import { ListProvider } from "./state/ListProvider";

test("Should show the welcome screen if the list is empty", () => {
  // Arrange
  const fakeData = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <ListProvider>
      <App />
    </ListProvider>
  );

  // Act
  const textElement = screen.getByText(/EIKA's shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Should show the normal screen if the list has items", () => {
  // Arrange
  const fakeItem = {
    id: 0,
    name: "Sofa",
    price: 1900,
    acquired: false,
    imageURL: "",
  };
  const fakeData = [fakeItem];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <ListProvider>
      <App />
    </ListProvider>
  );

  // Act
  const textElement = screen.getByText(/Your shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
