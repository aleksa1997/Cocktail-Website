import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="app-aboutus app-bg flex-center section-padding" id="about">
      <div className="app-aboutus-overlay flex-center">
        <img src={images.G} alt="bar-logo" />
      </div>
      <div className="app-aboutus-content flex-center">
        <div className="app-aboutus-content-about">
          <h1 className="headtext-cormorant">About Us</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="p-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>

        <div className="app-aboutus-content-cocktail flex-center">
          <img src={images.cocktailAbout} alt="cocktail-about" />
        </div>

        <div className="app-aboutus-content-history">
          <h1 className="headtext-cormorant">Our History</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="p-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
