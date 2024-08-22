// __tests__/Corousel.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ImageScrollbar from "components/ImageScrollbar";
import { store } from "redux/store";

describe("Corousel Component", () => {
  it("renders blog posts from the store", () => {
    render(
      <Provider store={store}>
        <ImageScrollbar />
      </Provider>
    );
  });
});
