import React from "react";
import { images } from "../../constants";

const SubHeading = (props) => (
  <div className="app__wrapper_sub-heading">
    <p className="p__opensanse">{props.title}</p>
    <img src={images.spoon} alt="spoon image" className="spoon__img" />
  </div>
);

export default SubHeading;
