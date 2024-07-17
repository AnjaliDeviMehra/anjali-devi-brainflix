import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import VideoList from "../video_list/VideoList";
import axios from "axios";
import VideoDetails from "../video_details/VideoDetails";
import VideoPlayer from "../video_player/VideoPlayer";
const HomePage = () => {
  const api_key = "411e88d0-a205-4e56-a9c5-66787f2553c5";
  const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    const getVideosData = async () => {
      const response = await axios.get(`${url}videos?api_key=${api_key}`);

      setVideos(response.data);
      console.log(videos)
    

    };

    getVideosData();
  }, []);


  console.log(videos)
 

  // function changeCurrentVideo(videoId) {
  //   const newVideo = videos.find((video) => {
  //     return video.id === videoId;
  //   });

  //   setCurrentVideo(newVideo);
  // }
  return (
    <>
      <Navbar />
     <VideoPlayer currentVideo={currentVideo} />
      <div className="video-sections">
        {/* <VideoDetails currentVideo={currentVideo} /> */}
        <VideoList
          videos={videos}
          // changeCurrentVideo={changeCurrentVideo}
          // currentVideo={currentVideo}
        /> 
      </div> 
    </>
  );
};

export default HomePage;
