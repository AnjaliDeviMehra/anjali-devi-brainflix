import React from "react";
import "./VideoDetails.scss";
import "../../styles/partials/global.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import add_comment from "../../assets/icons/add_comment.svg";

const VideoDetails = ({ currentVideo }) => {
  function getDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
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

      <section className="add-comments">
        <h2>{currentVideo.comments.length} Comments</h2>
        <div className="add-comments__form-container">
          <img src={mohan} className="add-comments__user-image" />
          <form className="add-comments__form">
            <label htmlFor="comment" className="add-comments__label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              rows={5}
              placeholder="Add a new comment"
              className="add-comments__input"
            ></textarea>
            <button className="button">
              <img
                src={add_comment}
                className="button__icon"
                alt="submit button"
              />
              COMMENT
            </button>
          </form>
        </div>
        <ul className="comments">
          {currentVideo.comments.map((comment) => {
            return (
              <li key={comment.id} className="comments__list-item">
                <section className="comments__image-container"></section>
                <section className="comments__section">
                  <div className="comments__header">
                    <h2>{comment.name}</h2>
                    <span>{getDate(comment.timestamp)}</span>
                  </div>
                  <p className="comments__comment">{comment.comment}</p>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default VideoDetails;
