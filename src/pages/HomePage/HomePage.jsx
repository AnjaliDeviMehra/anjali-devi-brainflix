import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import { useParams } from "react-router-dom";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = ({ setCurrentId, base_url, videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await axios.get(`${base_url}/videos/${id}`);
        setCurrentVideo(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getVideo();
    setCurrentId(id);
  }, [id]);

  return (
    <>
      {currentVideo && (
        <>
          <VideoPlayer currentVideo={currentVideo} />

          <div className="video-sections">
            <VideoDetails currentVideo={currentVideo} />
            <VideoList videos={videos} />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
