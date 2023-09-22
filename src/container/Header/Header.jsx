import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="app-header app-wrapper section-padding" id="home">
      <div className="app-wrapper-info">
        <SubHeading title="Take on a new flavour" />
        <h1 className="app-header-h1">The Key for Refreshing Cocktails</h1>
        <p className="p-opensans" style={{ margin: "2rem 0" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <button type="button" className="custom-button">
          Explore Menu
        </button>
      </div>
      <div className="app-wrapper-img">
        <img src={images.headerImage} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
