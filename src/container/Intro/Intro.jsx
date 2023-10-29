import React, { useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(true);

  const playVideoHandler = () => {
    setPlayVideo((prevVideo) => !prevVideo);

    if (playVideo) videoRef.current.play();
    else videoRef.current.pause();
  };
  return (
    <div className="app__video">
      <video src={meal} controls={false} muted ref={videoRef} />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay-circle flex__center">
          <div onClick={playVideoHandler}>
            {!playVideo ? (
              <BsFillPauseFill
                style={{ color: "var(--color-grey)", fontSize: "48px" }}
              />
            ) : (
              <BsFillPlayFill
                style={{ color: "var(--color-grey)", fontSize: "48px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
