import { useState, useEffect } from "react";
import "./App.scss";
import "./styles/partials/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import { Upload } from "./components/Upload/Upload";

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
        <Routes>
          <Route path="/" element={<Navigate to={`./videos/${defaultId}`} />} />
          <Route
            path="/videos/:id"
            element={
              <HomePage
                url={url}
                api_key={api_key}
                setCurrentId={setCurrentId}
                videos={newVideoList}
              />
            }
          />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
