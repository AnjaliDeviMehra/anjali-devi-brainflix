import React from "react";
import "./VideoList.scss";

const VideoList = ({ videos}) => {
  // const newVideoList = videos.filter((video) => {
  //   return video.id !== currentVideo.id;
  // });

  return (
    <section>
      <h2 className="video-heading">NEXT VIDEOS</h2>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <li
              // onClick={() => {
              //   changeCurrentVideo(video.id);
              // }}
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
    </section>
  );
};

export default VideoList;
