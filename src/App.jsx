import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import VideoList from "./components/video_list/VideoList";
import videoData from "./data/video-details.json";
import VideoDetails from "./components/video_details/VideoDetails";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  function changeCurrentVideo(videoId) {
    console.log(videoId);
    const newVideo = videos.find((video) => {
      return video.id === videoId;
    });
    console.log(newVideo);
    setCurrentVideo(newVideo);
  }
  return (
    <>
      <>
        <Navbar />
        <VideoDetails currentVideo={currentVideo} />
        <VideoList videos={videos} changeCurrentVideo={changeCurrentVideo} />
      </>
    </>
  );
}

export default App;
