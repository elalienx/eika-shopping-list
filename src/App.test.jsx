// NPM Packages
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import App from "./App";

test("renders user data", async () => {
  Storage.prototype.getItem = jest.fn(() => [{}, {}]);

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const textElement = screen.getByText(/Your shopping list/i);
  expect(textElement).toBeInTheDocument();
});
