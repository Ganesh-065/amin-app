// // // __tests__/Corousel.test.tsx
// // import { fireEvent, render, screen } from "@testing-library/react";
// // import TextEditor from "components/TextEditor";
// // import { Provider } from "react-redux";
// // import { store } from "redux/store";

// // // jest.mock("react-quill", () => {
// // //   return {
// // //     ...jest.requireActual("react-quill"),
// // //     onChange: jest.fn(),
// // //     value: "testing text",
// // //   };
// // // });

// // describe("Corousel Component", () => {
// //   it("renders blog posts from the store", () => {
// //     render(
// //       <Provider store={store}>
// //         <TextEditor />
// //       </Provider>
// //     );

// //     // const textEditorEl = screen.queryByPlaceholderText(
// //     //   "Please type your message..."
// //     // );

// //     // if (textEditorEl)
// //     //   fireEvent.change(textEditorEl, { target: { value: "Hi, how are you?" } });
// //   });
// // });

// import React from "react";
// import { fireEvent, screen } from "@testing-library/react";
// import Quill from "quill";
// import TextEditor from "components/TextEditor";
// import { renderWithProviders } from "tests/testUtils";

// jest.mock("quill", () => {
//   const mockQuill = {
//     format: jest.fn(),
//     getSelection: jest.fn(),
//     insertEmbed: jest.fn(),
//     root: {
//       querySelectorAll: jest.fn().mockReturnValue([]),
//     },
//   };
//   return jest.fn(() => mockQuill);
// });

// describe("TextEditor Component", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("initializes Quill editor", () => {
//     renderWithProviders(<TextEditor />);
//     expect(Quill).toHaveBeenCalledTimes(1);
//   });

//   // test("adds an image and sets its size", async () => {
//   //   const mockQuill = new Quill(document.createElement("div"));
//   //   const mockInsertEmbed = mockQuill.insertEmbed;
//   //   jest.spyOn(mockQuill, "insertEmbed").mockImplementation(() => {});

//   //   renderWithProviders(<TextEditor />);

//   //   // Simulate image upload
//   //   const input = screen.getByLabelText(/upload image/i) as HTMLInputElement;
//   //   const file = new File(["dummy content"], "test.png", { type: "image/png" });
//   //   fireEvent.change(input, { target: { files: [file] } });

//   //   expect(mockInsertEmbed).toHaveBeenCalledWith(
//   //     0,
//   //     "image",
//   //     expect.any(String)
//   //   );

//   //   // Use queries to find the image
//   //   const img = screen.getByRole("img");
//   //   expect(img).toHaveAttribute("width", "300px");
//   //   expect(img).toHaveAttribute("height", "300px");
//   // });

//   test("should call Quill.format with 'link' and URL when link button is clicked", () => {
//     // Mock the window.prompt to return a URL
//     jest.spyOn(window, "prompt").mockReturnValue("https://example.com");

//     // Render the TextEditor component
//     renderWithProviders(<TextEditor />);

//     const linkButton1 = screen.getByRole("toolbar", {
//       hidden: true,
//     });
//     console.log(linkButton1);

//     // Get the mock instance of Quill
//     const mockQuill = Quill as jest.MockedClass<typeof Quill>;
//     const mockFormat = mockQuill.mock.instances[0].format;

//     // Assert that Quill.format was called with 'link' and the URL
//     expect(mockFormat).toHaveBeenCalledWith("link", "https://example.com");
//   });

//   // test("handles image upload and sets image size", () => {
//   //   render(<TextEditor />);
//   //   const quillMockInstance = Quill.mock.instances[0];
//   //   const imageHandler = quillMockInstance.options.modules.toolbar.handlers.image;

//   //   // Simulate image upload
//   //   const input = document.createElement("input");
//   //   input.setAttribute("type", "file");
//   //   input.setAttribute("accept", "image/*");

//   //   const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
//   //   input.files = [mockFile];

//   //   jest.spyOn(window, 'FileReader').mockImplementation(function () {
//   //     this.readAsDataURL = jest.fn(() => {
//   //       this.onload({
//   //         target: {
//   //           result: "data:image/png;base64,dummybase64string",
//   //         },
//   //       });
//   //     });
//   //   });

//   //   imageHandler.call(quillMockInstance);
//   //   input.dispatchEvent(new Event("change"));

//   //   // Check if the image is inserted with correct size
//   //   const images = quillMockInstance.root.querySelectorAll("img");
//   //   expect(images).toHaveLength(1);
//   //   expect(images[0]).toHaveAttribute("width", "300px");
//   //   expect(images[0]).toHaveAttribute("height", "300px");
//   // });

//   // test("handles link prompt and updates editor", () => {
//   //   const promptSpy = jest.spyOn(window, "prompt").mockReturnValue("https://example.com");
//   //   const logSpy = jest.spyOn(console, "log");

//   //   render(<TextEditor />);
//   //   const quillMockInstance = Quill.mock.instances[0];
//   //   const linkHandler = quillMockInstance.options.modules.toolbar.handlers.link;

//   //   linkHandler.call(quillMockInstance);

//   //   expect(promptSpy).toHaveBeenCalledTimes(1);
//   //   expect(quillMockInstance.format).toHaveBeenCalledWith("link", "https://example.com");
//   //   expect(logSpy).toHaveBeenCalledWith("https://example.com");
//   // });
// });

import { fireEvent, screen } from "@testing-library/react";
import TextEditor from "components/TextEditor";
import Quill from "quill";
import { renderWithProviders } from "tests/testUtils";

jest.mock("quill", () => {
  return jest.fn().mockImplementation(() => {
    return {
      format: jest.fn(),
      getSelection: jest.fn().mockReturnValue({ index: 0 }),
      insertEmbed: jest.fn(),
      root: {
        querySelectorAll: jest.fn().mockReturnValue([]),
        querySelector: jest.fn().mockImplementation((selector) => {
          if (selector === ".ql-link") {
            return { click: jest.fn() };
          }
          return null;
        }),
      },
    };
  });
});

jest.spyOn(window, "prompt").mockReturnValue("https://example.com");

test("should call Quill.format with 'link' and URL when link button is clicked", () => {
  renderWithProviders(<TextEditor />);

  const linkButton = screen.getByRole("button", { name: /link/i });
  fireEvent.click(linkButton);

  const mockQuill = Quill as jest.MockedClass<typeof Quill>;
  const mockFormat = mockQuill.mock.instances[0].format;

  expect(mockFormat).toHaveBeenCalledWith("link", "https://example.com");
});
