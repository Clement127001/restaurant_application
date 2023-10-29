import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  // main menu
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* menu title */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h2 className="headtext__cormorant">Today’s Special</h2>
    </div>

    {/* menu */}

    <div className="app__specialMenu-menu flex__center">
      {/* wines */}
      <div className="app__specialMenu_menu-wine">
        <h3 className="app__specialMenu-menu_menuItem-title">Wine & Beer</h3>
        <div className="app__specialMenu_menuItem-menuItem">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      {/* image */}

      <div className="app__specialMenu_menu-img">
        <img src={images.menu} />
      </div>

      {/* cocktails */}

      <div className="app__specialMenu_menu-cocktail">
        <h3 className="app__specialMenu-menu_menuItem-title">Cocktails</h3>
        <div className="app__specialMenu_menuItem-menuItem">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* button */}

    <div className="app__specialMenu-menu_btn">
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
