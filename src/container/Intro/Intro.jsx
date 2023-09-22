import React, { useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs";
import { makingCocktail } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app-video">
      <video
        src={makingCocktail}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app-video-overlay flex-center">
        <div
          className="app-video-overlay-circle flex-center"
          onClick={handleVideo}>
          {playVideo ? (
            <BsPause color="var(--color-golden)" fontSize={50} />
          ) : (
            <BsPlay color="var(--color-golden)" fontSize={50} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
