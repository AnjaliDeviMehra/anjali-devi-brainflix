import { useState, useEffect } from "react";
import "./App.scss";
import "./styles/partials/global.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import VideoDetails from "./components/video_details/VideoDetails";
import axios from "axios";
import VideoList from "./components/video_list/VideoList";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [videos, setVideos] = useState([]);
  const [currentId, setCurrentId] = useState();
  const api_key = "411e88d0-a205-4e56-a9c5-66787f2553c5";
  const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  useEffect(() => {
    const getVideosData = async () => {
      const response = await axios.get(`${url}videos?api_key=${api_key}`);
      setVideos(response.data);
      setCurrentId(response.data[0].id);
    };
    getVideosData();
  }, []);

  if (!videos.length) {
    return "Loading...";
  }

  const defaultId = videos[0].id;
  const newVideoList = videos.filter((video) => video.id != currentId);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="video-sections">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`./videos/${defaultId}`} />}
            />

            <Route
              path="/videos/:id"
              element={
                <HomePage
                  url={url}
                  api_key={api_key}
                  setCurrentId={setCurrentId}
                />
              }
            />
          </Routes>
          <VideoList videos={newVideoList} />
        </div>
      </BrowserRouter>
      {/* <Navbar />
      <VideoPlayer currentVideo={currentVideo} />
      <div className="video-sections">
        <VideoDetails currentVideo={currentVideo} />
        <VideoList
          videos={videos}
          changeCurrentVideo={changeCurrentVideo}
          currentVideo={currentVideo}
        /> */}

      {/* </div> */}
    </>
  );
}

export default App;
