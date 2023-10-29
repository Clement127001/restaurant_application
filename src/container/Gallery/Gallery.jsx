import React, { useRef } from "react";

import "./Gallery.css";
import { SubHeading } from "../../components";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { images } from "../../constants";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
  images.gallery08,
  images.gallery09,
  images.gallery10,
];

const Gallery = () => {
  const galleryRef = useRef(null);

  const scrollHandler = (dir) => {
    galleryRef.current.scrollLeft += dir;
  };

  return (
    <div className="app__gallery">
      {/* information content */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h2 className="headtext__cormorant">Photo Gallery</h2>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" style={{ margin: "2rem 0" }}>
          View More
        </button>
      </div>
      {/* gallery images */}
      <div className="app__gallery-images">
        {/* image container */}
        <div className="app__gallery_images-container" ref={galleryRef}>
          {galleryImages.map((img, index) => (
            <div
              className="app__gallery_images-image flex__Center"
              key={`gallery-image-${index}`}
            >
              <img src={img} alt="gallery image" />

              <BsInstagram className="app_overlay-icon" />
            </div>
          ))}
        </div>

        {/* arrow icons */}
        <div className="app__gallery-icons">
          <BsArrowLeftShort
            className="app__gallery-icons-icon"
            onClick={() => {
              scrollHandler(-300);
            }}
          />
          <BsArrowRightShort
            className="app__gallery-icons-icon"
            onClick={() => {
              scrollHandler(300);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
