import React from "react";
import "./styles.css";

const ImageScrollbar = () => {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
    "https://picsum.photos/200/303",
    "https://picsum.photos/200/304",
    "https://picsum.photos/200/305",
    "https://picsum.photos/200/306",
    "https://picsum.photos/200/307",
    "https://picsum.photos/200/308",
    "https://picsum.photos/200/309",
  ];

  return (
    <div>
      <div
        className="scroll-container"
        style={{
          width: "100%",
          overflowX: "scroll",
          whiteSpace: "nowrap",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image_${image}`}
            style={{
              display: "inline-block",
              height: "125px",
              width: "270px",
              margin: "10px",
              marginLeft: "0px",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScrollbar;
