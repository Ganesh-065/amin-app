import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextEditor: React.FC = () => {
  const quillRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ color: [] }, { background: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" },
              ],
              ["link", "image"],
              ["clean"], // remove formatting button
            ],
            handlers: {
              image: function () {
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.click();

                input.onchange = () => {
                  const file = input.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      const base64String = reader.result?.toString();
                      const range = quill.getSelection();
                      quill.insertEmbed(
                        range ? range.index : 0,
                        "image",
                        base64String
                      );

                      // Set the image size to 300x300px
                      const images = quill.root.querySelectorAll("img");
                      if (images.length > 0) {
                        const image = images[images.length - 1]; // Get the last inserted image
                        image.setAttribute("width", "300px");
                        image.setAttribute("height", "300px");
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                };
              },
              link: function () {
                const input = document.createElement("buttton");
                const value = prompt("Enter the URL:");
                input.setAttribute("data-testid", "link-text");
                if (value) {
                  quill.format("link", value);

                  console.log(value);
                }
              },
            },
          },
        },
      });

      editorRef.current = quill;
    }

    return () => {
      editorRef.current = null;
    };
  }, []);

  return (
    <div style={{ height: 400, width: 800, margin: "auto" }}>
      <div ref={quillRef}></div>
    </div>
  );
};

export default TextEditor;

//       <div className="controls">
//         <button
//           className="controls-right"
//           type="button"
//           onClick={() => {
//             alert(quillRef.current?.getLength());
//           }}
//         >
//           Get Content Length
//         </button>
//         {range ? JSON.stringify(range) : "Empty"}
//         {lastChange ? JSON.stringify(lastChange.ops) : "Empty"}
