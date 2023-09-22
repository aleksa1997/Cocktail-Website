import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app-laurels-awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app-laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app-bg app-wrapper section-padding" id="awards">
      <div className="app-wrapper-info">
        <SubHeading title="Awards and recognition" />
        <h1 className="headtext-cormorant">Our Awards</h1>

        <div className="app-laurels-awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app-wrapper-img">
        <img src={images.laurelsCocktail} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
