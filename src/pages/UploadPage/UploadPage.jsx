import { useState, useEffect, useRef } from "react";
import "./UploadPage.scss";
import "../../styles/partials/global.scss";
import upload_video from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";
import { faker } from "@faker-js/faker";

const UploadPage = ({ base_url }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const postData = async (title, description) => {
    try {
      await axios.post(`${base_url}/videos`, {
        title: title,
        description: description,
        channel: faker.person.fullName(),
        image: `${base_url}/images/Upload-video-preview.jpg`,
        views: faker.number.int({ min: 100, max: 1000 }),
        likes: faker.number.int({ min: 100, max: 1000 }),
        timestamp: 1691471862000,
        comments: [
          {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            comment: faker.lorem.sentence(),
            likes: 0,
            timestamp: 1691731062000,
          },
          {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            comment: faker.lorem.sentence(),
            likes: 0,
            timestamp: 1691731062000,
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    postData(title, description);
    e.target.reset();
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
        <form className="upload__form" onSubmit={handleSubmit}>
          <label htmlFor="title">
            <h2 className="upload__label">TITLE YOUR VIDEO</h2>
          </label>
          <input
            type="text"
            placeholder="Add a title to your video"
            id="title"
            name="title"
            className="upload__input"
            onChange={handleChange}
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
            onChange={handleChange}
          ></textarea>

          <div className="upload__links">
            <button type="submit" className="upload__publish">
              <img src={publish} alt="publish icon" className="upload__icon" />
              PUBLISH
            </button>
            <button type="reset" className="upload__cancel">
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default UploadPage;
