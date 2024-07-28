import { useState, useEffect } from "react";
import "./App.scss";
import "./styles/partials/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  const [videos, setVideos] = useState([]);
  const [currentId, setCurrentId] = useState();

  const base_url = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const getVideosData = async () => {
      const response = await axios.get(`${base_url}/videos`);
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
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to={`./videos/${defaultId}`} />} />
          <Route
            path="/videos/:id"
            element={
              <HomePage
                base_url={base_url}
                setCurrentId={setCurrentId}
                videos={newVideoList}
              />
            }
          />
          <Route path="/upload" element={<UploadPage base_url={base_url} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
