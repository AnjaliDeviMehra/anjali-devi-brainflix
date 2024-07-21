import React from "react";
import "./UploadPage.scss";
import "../../styles/partials/global.scss";
import upload_video from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";
import { Link } from "react-router-dom";

const UploadPage = () => {
  const handleClick = () => {
    alert("Video Uploaded");
  };

  return (
    <main className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <section className="upload__form-container">
        <div className="upload__image-container">
          <h2 className="upload__label">VIDEO THUMBNAIL</h2>
          <img
            src={upload_video}
            className="upload__thumbnail"
            alt="video thumbnail"
          />
        </div>
        <form className="upload__form">
          <label htmlFor="title">
            <h2 className="upload__label">TITLE YOUR VIDEO</h2>
          </label>
          <input
            type="text"
            placeholder="Add a title to your video"
            id="title"
            name="title"
            className="upload__input"
          />
          <label htmlFor="description" className="upload__label">
            <h2 className="upload__label">ADD A VIDEO DESCRIPTION</h2>
          </label>
          <textarea
            placeholder="Add a description to your video"
            id="description"
            name="description"
            className="upload__input"
            rows="5"
          ></textarea>
        </form>
      </section>
      <div className="upload__links">
        <Link className="upload__publish" to="/" onClick={handleClick}>
          <img src={publish} alt="publish icon" className="upload__icon" />
          PUBLISH
        </Link>
        <Link className="upload__cancel">CANCEL</Link>
      </div>
    </main>
  );
};

export default UploadPage;
