import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import VideoList from "./components/video_list/VideoList";
import videoData from "./data/video-details.json";
import VideoDetails from "./components/video_details/VideoDetails";
import VideoPlayer from "./components/video_player/VideoPlayer";
import "./App.scss";
import "./styles/partials/global.scss";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  function changeCurrentVideo(videoId) {
    const newVideo = videos.find((video) => {
      return video.id === videoId;
    });

    setCurrentVideo(newVideo);
  }
  return (
    <>
      <Navbar />
      <VideoPlayer currentVideo={currentVideo} />
      <div className="video-sections">
        <VideoDetails currentVideo={currentVideo} />
        <VideoList
          videos={videos}
          changeCurrentVideo={changeCurrentVideo}
          currentVideo={currentVideo}
        />
      </div>
    </>
  );
}

export default App;
