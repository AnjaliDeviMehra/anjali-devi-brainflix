import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import VideoList from "./components/video_list/VideoList";
import videoData from "./data/video-details.json";

function App() {
  const [data, setData] = useState(videoData);
  return (
    <>
      <>
        <Navbar />
        <VideoList data={data} />
      </>
    </>
  );
}

export default App;
