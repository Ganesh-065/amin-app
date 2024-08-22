import { screen } from "@testing-library/react";
import { render } from "tests/testUtils";
import App from "./App";

describe("checking app file", () => {
  it("works", () => {
    render(<App />);

    const title = screen.getByText(/app/i);
    expect(title).toBeInTheDocument();
  });
});
