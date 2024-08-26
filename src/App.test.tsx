import { render, screen } from "@testing-library/react";
import NotFound from "components/NotFound";
import { renderWithProviders } from "tests/testUtils";
import App from "./App";

describe("checking app file", () => {
  it("renders NotFound component for undefined route", async () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/admin app/i)).toBeInTheDocument();
  });

  it("renders NotFound component for  n undefined route", async () => {
    render(<NotFound />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
