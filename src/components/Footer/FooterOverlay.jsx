import React from "react";

import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { images } from "../../constants";
import "./FooterOverlay.css";

const FooterOverlay = () => (
  <div className="app__footer section__padding  app__bg">
    <div className="flex__center">
      {/* contact */}
      <div className="app__footer-contact flex__center">
        <h4 className="p__cormorant">Contact Us</h4>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>

      {/* footer title */}
      <div className="app__footer-title flex__center">
        <h2 className="headtext__cormorant">Gerícht</h2>

        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon image" />

        <div className="app__footer_contact-socialIcons flex__center">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>

      {/* woking hour */}

      <div className="app__footer-working flex__center">
        <h4 className="p__cormorant">Working Hours</h4>
        <div className="app__footer-weekDays">
          <p className="p__opensans">Monday-Friday: </p>
          <p className="p__opensans">08:00 am -12:00 am</p>
        </div>
        <div className="app__footer-weekEnd">
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans"> 07:00am -11:00 pm</p>
        </div>
      </div>
    </div>

    <div className="app__footer-copyRight">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default FooterOverlay;
