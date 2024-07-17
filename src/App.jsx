import { useState } from "react";
import "./App.scss";
import "./styles/partials/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
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
