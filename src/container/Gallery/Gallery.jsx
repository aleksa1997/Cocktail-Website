import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsInstagram,
} from "react-icons/bs";
import "./Gallery.css";

const galleryImages = [
  images.Gallery05,
  images.Gallery02,
  images.Gallery03,
  images.Gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app-gallery flex-center">
      <div className="app-gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p
          className="p-opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>
      <div className="app-gallery-images">
        <div className="app-gallery-images-container" ref={scrollRef}>
          {[
            images.Gallery05,
            images.Gallery02,
            images.Gallery03,
            images.Gallery04,
          ].map((image, index) => (
            <div
              className="app-gallery-images-card flex-center"
              key={`gallery-image-${index + 1}`}>
              <img src={image} alt="gallery-image" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="app-gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
