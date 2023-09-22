import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app-specialMenu flex-center section-padding" id="menu">
      <div className="app-specialMenu-title">
        <SubHeading title="Menu for Good Time" />
        <h1 className="headtext-cormorant">Today's Special</h1>
      </div>

      <div className="app-specialMenu-menu">
        <div className="app-specialMenu-menu-sweet flex-center">
          <p className="app-specialMenu-menu-heading">Sweet</p>
          <div className="app-specialMenu-menu-items">
            {data.sweetCocktail.map((sweet, index) => (
              <MenuItem
                key={sweet.title + index}
                title={sweet.title}
                price={sweet.price}
                tags={sweet.tags}
              />
            ))}
          </div>
        </div>

        <div className="app-specialMenu-menu-img">
          <img src={images.menuCocktail} alt="menu-img" />
        </div>

        <div className="app-specialMenu-menu-bitter flex-center">
          <p className="app-specialMenu-menu-heading">Bitter</p>
          <div className="app-specialMenu-menu-items">
            {data.bitterCocktail.map((bitter, index) => (
              <MenuItem
                key={bitter.title + index}
                title={bitter.title}
                price={bitter.price}
                tags={bitter.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
