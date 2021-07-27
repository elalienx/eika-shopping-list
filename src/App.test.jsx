import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";

const fakeItem = {
  id: 0,
  name: "Sofa",
  price: 700,
  acquired: false,
  imageURL: "",
};

Storage.prototype.getItem = jest.fn(() => "[]");

test("renders learn react link", () => {
  // Arrange
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
