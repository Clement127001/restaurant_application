import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    {/* heading */}
    <div className="app__menuItem-header">
      <div className="app__menuItem_header-title">
        <p>{title}</p>
      </div>
      <div className="app__menuItem_header-dash"></div>
      <div>
        <p className="app__menuItem_header-price">{price}</p>
      </div>
    </div>
    {/* sub heading */}
    <div className="app__menuItem_sub">
      <p className="p__opensans">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
