// __tests__/Corousel.test.tsx
import { configureStore } from "@reduxjs/toolkit";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import blogSlice, { incrementBlogVal, setBlogVal } from "redux/blogSlice";
import { renderWithProviders } from "tests/testUtils";
import Corousel from "../../components/Corousel";

jest.useFakeTimers(); // Use Jest's fake timers

describe("Corousel Component", () => {
  it("renders blog posts from the store", () => {
    renderWithProviders(<Corousel />);

    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  });

  it("should increment blogIndex or reset to 0 at intervals", () => {
    const store = configureStore({
      reducer: { blog: blogSlice },
      preloadedState: {
        blog: {
          blogIndex: 3,
          posts: [],
        },
      },
    });

    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <Corousel />
      </Provider>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const button = screen.getAllByRole("button")[3];
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalledWith(setBlogVal(0));
  });

  it("should increment blogIndex 1 or reset to 0 at intervals", () => {
    const store = configureStore({
      reducer: { blog: blogSlice },
      preloadedState: {
        blog: {
          blogIndex: 2,
          posts: [],
        },
      },
    });

    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <Corousel />
      </Provider>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(dispatchSpy).toHaveBeenCalledWith(incrementBlogVal());
  });
});
