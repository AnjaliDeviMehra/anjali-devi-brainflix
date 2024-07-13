import React from "react";
import "./VideoDetails.scss";
import "../../styles/partials/global.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

const VideoDetails = ({ currentVideo }) => {
  return (
    <>
      <section className="current-video">
        <video
          className="current-video__player"
          poster={currentVideo.image}
        ></video>
        <article className="video-info">
          <header>
            <h1>{currentVideo.title}</h1>
            <ul className="video-info__list">
              <li className="video-info__channel-name">
                <h3>By {currentVideo.channel}</h3>
              </li>
              <li className="video-info__list-item">
                <img src={views} />
                <span className="video-info__review">{currentVideo.views}</span>
              </li>

              <li className="video-info__list-item">
                {currentVideo.timestamp}
              </li>

              <li className="video-info__list-item">
                <img src={likes} />
                <span className=" video-info__review">
                  {currentVideo.likes}
                </span>
              </li>
            </ul>
          </header>
          <p className="video-info__description">{currentVideo.description}</p>
        </article>
      </section>
    </>
  );
};

export default VideoDetails;
