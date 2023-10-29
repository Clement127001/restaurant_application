import React from "react";

import "./Newsletter.css";
import { SubHeading } from "../../components";

const Newsletter = () => (
  <div className="app__newsLetter flex__center">
    <SubHeading title="Newsletter" />
    <h3 className="headtext__cormorant">Subscribe to Our Newsletter</h3>

    <p className="p__opensans">And never miss latest Updates!</p>

    <div className="app__form">
      <input placeholder="Email Address" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
