import React, { useState } from "react";

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="slideshow-container" style={{ position: "relative", maxWidth: "600px" }}>
      <div className="slide">
        <img
          src={images[slideIndex]}
          alt={`Screenshot ${slideIndex + 1}`}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <div className="numbertext" style={{ textAlign: "center", marginTop: "0.5rem" }}>
          {slideIndex + 1} / {images.length}
        </div>
      </div>

      <button className="prev" onClick={() => plusSlides(-1)} style={buttonStyle}>
        ❮
      </button>
      <button className="next" onClick={() => plusSlides(1)} style={buttonStyle}>
        ❯
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  fontSize: "18px",
  zIndex: 1,
};

export default Slideshow;
