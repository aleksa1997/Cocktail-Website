import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app-footer section-padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app-footer-links">
        <div className="app-footer-links-contact">
          <h1 className="app-footer-headtext">Contact Us</h1>
          <p className="p-opensans">
            1118 Haul Road Minneapolis, 55401 Minnesota
          </p>
          <p className="p-opensans">+651-256-6117</p>
          <p className="p-opensans">+651-245-1486</p>
        </div>
        <div className="app-footer-links-logo">
          <img src={images.gericht} alt="footer-logo" />
          <p className="p-opensans">
            "Don’t drink in the hotel bar, that’s where I do my drinking."
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon-img"
            style={{ marginTop: "15px" }}
          />
          <div className="app-footer-links-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app-footer-links-work">
          <h1 className="app-footer-headtext">Working Hours</h1>
          <p className="p-opensans">Monday - Friday</p>
          <p className="p-opensans">10:00 am - 11:00 pm</p>
          <p className="p-opensans">Saturday - Sunday</p>
          <p className="p-opensans">10:00 am - 02:00 am</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="p-opensans">©2023 Gerícht. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
