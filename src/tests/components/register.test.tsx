import { renderHook, act, fireEvent, screen } from "@testing-library/react";
import Register from "components/Register";
import useUserStore, { User } from "redux/userStore";
import { renderWithProviders } from "tests/testUtils";

describe("useUserStore", () => {
  it("should initialize with the correct default state", () => {
    const { result } = renderHook(() => useUserStore());

    renderWithProviders(<Register />);

    expect(result.current.user).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  });

  it("should set the user state when setUser is called", () => {
    const { result } = renderHook(() => useUserStore());

    renderWithProviders(<Register />);

    const userDetails: User = {
      firstName: "test",
      lastName: "test",
      email: "test",
      password: "",
    };

    // act(() => {
    //   result.current.setUser(userDetails);
    // });

    const roles = screen.getAllByRole("textbox");

    roles.forEach((role) => {
      fireEvent.change(role, { target: { value: "test" } });
    });

    const buttonEl = screen.getByRole("button", { name: "Sign Up" });
    fireEvent.click(buttonEl);

    expect(result.current.user).toEqual(userDetails);
  });

  it("should reset the user state when removeUser is called", () => {
    const { result } = renderHook(() => useUserStore());

    renderWithProviders(<Register />);

    const userDetails: User = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    };

    act(() => {
      result.current.setUser(userDetails);
      result.current.removeUser();
    });

    expect(result.current.user).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  });
});
