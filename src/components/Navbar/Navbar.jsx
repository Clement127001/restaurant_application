import React, { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);

  const toggleHandler = () => {
    setToogleMenu((prevState) => !prevState);
  };

  return (
    <nav className="app__navbar">
      <a href="#home">
        <img className="app__navbar-logo" src={images.gericht} />
      </a>

      <ul className="app__navbar-links">
        <li>
          <a href="#home" className="p__opensans">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="p__opensans">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="p__opensans">
            Menu
          </a>
        </li>
        <li>
          <a href="#blog" className="p__opensans">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact-us" className="p__opensans">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="app__navbar_login">
        <a href="#" className="p__opensans">
          Log In/Registation
        </a>
        <div></div>
        <a href="#" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        (
        <GiHamburgerMenu
          style={{
            color: "White",
            fontSize: "27px",
            fontWeight: "400",
            cursor: "pointer",
          }}
          onClick={toggleHandler}
        />
        )
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu
              style={{ color: "var(--color-golden)", fontSize: "27px" }}
              onClick={toggleHandler}
              className="menu-item"
            />
            <ul className="app__navbar-smallScreen_links">
              <li>
                <a href="#home" onClick={toggleHandler}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleHandler}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={toggleHandler}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#blog" onClick={toggleHandler}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact-us" onClick={toggleHandler}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
