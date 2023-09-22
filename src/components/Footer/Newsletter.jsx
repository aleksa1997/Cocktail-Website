import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app-newsletter">
      <div className="app-newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext-cormorant">Subscribe To Our Newsletter</h1>
        <p className="p-opensans">Never Miss Our Latest Updates</p>
      </div>
      <div className="app-newsletter-input flex-center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button className="custom-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
