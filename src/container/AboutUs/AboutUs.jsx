import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg  section__padding flex__center"
    id="about"
  >
    {/* div that is background */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} className="app__aboutus-overlay_img" />
    </div>
    <div className="app__aboutus-content">
      <div className="app__aboutus-content-about">
        <h2 className="headtext__cormorant">About Us</h2>
        <img src={images.spoon} />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content-knife">
        <img src={images.knife} />
      </div>
      <div className="app__aboutus-content-history">
        <h2 className="headtext__cormorant">Our History</h2>
        <img src={images.spoon} />
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
