import React from "react";
import { images } from "../../constants";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header section__padding app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1
        className="
      app__wrapper_info-title"
      >
        The key to Fine dining
      </h1>
      <p className="p__opensans app__wrapper-para">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;
