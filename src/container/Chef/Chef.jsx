import React from "react";
import { SubHeading, subHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg section__padding app__wrapper">
    {/* chef image */}
    <div className="app__chef-img">
      <img src={images.chef} alt="chef image" />
    </div>

    {/* chef info */}

    <div className="app__chef-content">
      <div className="app__chef-content-head">
        <SubHeading title="Chef’s Word" />
        <h2 className="headtext__cormorant">What we believe in</h2>
      </div>

      {/*  info  */}
      <div className="app__chef-content-info">
        <img src={images.quote} alt="quotes" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      {/* sign */}

      <div className="app__chef-content-des">
        <h4>Kevin Luo</h4>
        <p>Chef & Founder</p>
      </div>

      <div className="app__chef-content-sign">
        <img src={images.sign} />
      </div>
    </div>
  </div>
);

export default Chef;
