import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => {
  return (
    <div className="app-bg app-wrapper section-padding" id="contact">
      <div className="app-wrapper-info">
        <SubHeading title="Contact" />
        <h1 className="headtext-cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app-wrapper-content">
          <p className="p-opensans">
            1118 Haul Road Minneapolis, 55401 Minnesota
          </p>
          <p
            className="p-cormorant"
            style={{ color: "dcca87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p-opensans">Mon - Fri: 10:00 am - 11:00 pm</p>
          <p className="p-opensans">Sat - Sun: 10:00 am - 02:00 am</p>
        </div>
        <button className="custom-button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>
      <div className="app-wrapper-img">
        <img src={images.findUS} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
