import React from "react";
import "./VideoList.scss";

const VideoList = ({ videos, changeCurrentVideo }) => {
  return (
    <>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <li
              onClick={() => {
                changeCurrentVideo(video.id);
              }}
              key={video.id}
              className="video-list__item"
            >
              <section className="video-list__container">
                <img src={video.image} className="video-list__image" />
              </section>
              <section className="video-list__info">
                <h2>{video.title}</h2>
                <p className="video-list__channel">{video.channel}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default VideoList;
