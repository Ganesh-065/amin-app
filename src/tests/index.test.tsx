import * as index from "../index";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

describe("Application root", () => {
  it("should render without crashing", () => {
    expect(index).toEqual({});
  });
});
