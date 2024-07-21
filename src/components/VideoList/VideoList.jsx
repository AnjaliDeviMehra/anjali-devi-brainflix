import React from "react";
import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ videos }) => {
  return (
    <section>
      <h2 className="video-heading">NEXT VIDEOS</h2>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <Link
              to={`/videos/${video.id}`}
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
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default VideoList;
