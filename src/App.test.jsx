import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";

test("Shows welcome if list is empty", () => {
  // Arrange
  const fakeData = [];
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
