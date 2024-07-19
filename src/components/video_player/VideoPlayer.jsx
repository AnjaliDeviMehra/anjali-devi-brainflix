import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <section>
      <video
        className="video-player"
        poster={currentVideo.image}
        controls
      ></video>
    </section>
  );
};

export default VideoPlayer;
