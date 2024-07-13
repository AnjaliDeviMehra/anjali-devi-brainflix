import React from "react";
import "./VideoDetails.scss";
import "../../styles/partials/global.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

const VideoDetails = ({ currentVideo }) => {
  function getDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
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
                <h2>By {currentVideo.channel}</h2>
              </li>
              <li className="video-info__list-item">
                <img src={views} className="video-info__icon" />
                <span className="video-info__review">{currentVideo.views}</span>
              </li>

              <li className="video-info__list-item">
                {getDate(currentVideo.timestamp)}
              </li>

              <li className="video-info__list-item">
                <img src={likes} className="video-info__icon" />
                <span className=" video-info__review">
                  {currentVideo.likes}
                </span>
              </li>
            </ul>
          </header>
          <p className="video-info__description">{currentVideo.description}</p>
        </article>
      </section>

      <section className="comments">
        <h2>{currentVideo.comments.length} Comments</h2>
      </section>
    </>
  );
};

export default VideoDetails;
