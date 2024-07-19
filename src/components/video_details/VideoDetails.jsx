import React, { useState, useEffect} from "react";
import "./VideoDetails.scss";
import "../../styles/partials/global.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import add_comment from "../../assets/icons/add_comment.svg";
import axios from "axios";
import { Navigate, redirect, useParams } from "react-router-dom";

const VideoDetails = ({ currentVideo}) => {

  const [isEmpty, setIsEmpty] = useState(false);

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  return (
    <>


  {currentVideo && (<>
    <section className="current-video">
   
    
   
      <article className="video-info">
        <h1>{currentVideo.title}</h1>
        <header className="video-info__header">
          <ul className="video-info__list">
            <li>
              <h2 className="video-info__channel-name">
                By {currentVideo.channel}
              </h2>
            </li>
            <li className="video-info__list-item">
              {getDate(currentVideo.timestamp)}
            </li>
          </ul>
          <ul className="video-info__list">
            <li className="video-info__list-item">
              <img src={views} className="video-info__icon" />
              <span className="video-info__review">{currentVideo.views}</span>
            </li>
            <li className="video-info__list-item">
              <img src={likes} className="video-info__icon" />
              <span className=" video-info__review">{currentVideo.likes}</span>
            </li>
          </ul>
        </header>
        <p className="video-info__description">{currentVideo.description}</p>
      </article>

      <section className="add-comments">
        <h2>{currentVideo.comments.length} Comments</h2>
        <div className="add-comments__form-container">
          <img src={mohan} className="add-comments__user-image" />
          <form className="add-comments__form">
            <section className="input-section">
              <label htmlFor="comment" className="input-section__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                placeholder="Add a new comment"
                className={`input-section__input ${
                  isEmpty ? "input-section__input--error" : ""
                }`}
                onBlur={handleChange}
                onChange={handleChange}
              ></textarea>
            </section>
            <button className="add-comments__button">
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
                    <span className="comments__date">
                      {getDate(comment.timestamp)}
                    </span>
                  </div>
                  <p className="comments__comment">{comment.comment}</p>
                </section>
              </li>
            );
          })}
        </ul>
      </section> 
    </section>
    
    </>)}
      
    </>
    );
};

export default VideoDetails;
