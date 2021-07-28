import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";

test("Shows welcome screen if list is empty", () => {
  // Arrange
  const fakeData = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  // Act
  const textElement = screen.getByText(/EIKA's shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Shows normal screen if list has items", () => {
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
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  // Act
  const textElement = screen.getByText(/Your shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
