import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <>
      <video
        className="video-player"
        // poster={currentVideo.image}
        controls
      ></video>
    </>
  );
};

export default VideoPlayer;
