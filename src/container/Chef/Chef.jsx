import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => {
  return (
    <div className="app-bg app-wrapper section-padding">
      <div className="app-wrapper-img app-wrapper-img-reverse">
        <img src={images.bartender} alt="bartender" />
      </div>
      <div className="app-wrapper-info">
        <SubHeading title="Simply the Best" />
        <h1 className="headtext-cormorant">What We Believe In</h1>
        <div className="app-bartender-content">
          <div className="app-bartender-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p-opensans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
          </div>
          <p className="p-opensans">
            {" "}
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
        </div>
        <div className="app-bartender-sign">
          <p>Kevin Luo</p>
          <p className="p-opensans">Main Bartender</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
