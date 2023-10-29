import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const Award = ({ title, imgUrl, subtitle }) => (
  <div className="app__awards">
    <div className="app__awards-img">
      <img src={imgUrl} alt="awards" />
    </div>
    <div className="app__awards-info">
      <p className="p__cormorant">{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__laurels app__bg section__padding" id="blog">
    <img src={images.logo} alt="logo" />

    <div className="app__wrapper">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h2 className="headtext__cormorant">Our Laurels</h2>

        <div className="app__wrapper_info-awards">
          {data.awards.map((award) => (
            <Award
              key={award.title}
              title={award.title}
              imgUrl={award.imgUrl}
              subtitle={award.subtitle}
            />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurel" />
      </div>
    </div>
  </div>
);

export default Laurels;
