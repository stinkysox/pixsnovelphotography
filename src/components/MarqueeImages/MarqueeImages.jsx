import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      { imageUrl: "https://i.postimg.cc/2j13znkr/Z62-1158.jpg" },
      { imageUrl: "https://i.postimg.cc/cJV1Cb4W/SUR03371.jpg" },
      { imageUrl: "https://i.postimg.cc/TYwPkmsZ/AKP06658.jpg" },
      { imageUrl: "https://i.postimg.cc/fLrPDGw7/Z62-1201.jpg" },
      { imageUrl: "https://i.postimg.cc/2yvNJk4L/DSC04580.jpg" },
      { imageUrl: "https://i.postimg.cc/j217Sh9J/Z62-1045.jpg" },
    ],
    "Left Images": [
      { imageUrl: "https://i.postimg.cc/2j0dtQHY/DSC04383.jpg" },
      { imageUrl: "https://i.postimg.cc/mr4FkkdV/SUR03313.jpg" },
      { imageUrl: "https://i.postimg.cc/vTC4sZgr/SRA07798.jpg" },
      { imageUrl: "https://i.postimg.cc/wjqn5cbm/DSC03829.jpg" },
      { imageUrl: "https://i.postimg.cc/x11FNjcG/RAJ01090.jpg" },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
