import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const FindUs = () => (
  <div
    className="app__findUs app__wrapper section__padding app__bg"
    style={{ justifyContent: "space-evenly" }}
    id="contact-us"
  >
    <div className="app__wrapper_info" style={{ flex: "1" }}>
      <SubHeading title="Contact" />
      <h2 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Find Us
      </h2>
      <p
        className="p__opensans"
        style={{
          fontSize: "1rem",
          marginBottom: "1rem",
          color: "var(--color-grey",
        }}
      >
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <p
        className="p__cormorant"
        style={{ color: "var(--color-golden", marginBottom: "1rem" }}
      >
        Opening Hours
      </p>

      <p
        className="p__opensans"
        style={{ color: "var(--color-white)", marginBottom: "0.75rem" }}
      >
        Mon - Fri: 10:00 am - 02:00 am
      </p>
      <p
        className="p__opensans"
        style={{ color: "var(--color-white)", marginBottom: "2rem" }}
      >
        Sat - Sun: 10:00 am - 03:00 am
      </p>
      <button className="custom__button">Visit Us</button>
    </div>

    <div className="app__wrapper_img ">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
