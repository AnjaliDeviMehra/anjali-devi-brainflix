import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoDetails from "../video_details/VideoDetails";
import VideoPlayer from "../video_player/VideoPlayer";
const HomePage = ({setCurrentId, api_key , url, }) => {
  
  const [currentVideo, setCurrentVideo]=useState(null);
  const {id} = useParams();
  
 
  const getVideo = async()=>{ 
    const response = await axios.get(`${url}videos/${id}?api_key=${api_key} `)
    setCurrentVideo(response.data);
    
  }
  useEffect(()=>{
  try{
    getVideo();
    setCurrentId(id);
    // const newVideoList = videos.filter((video)=> video.id != id);
    // console.log(id)
    // // setVideos(newVideoList)
    // console.log(videos)
  }
  catch(e){
    console.log(e);
    
  }
 },[id])

  // function changeCurrentVideo(videoId) {
  //   const newVideo = videos.find((video) => {
  //     return video.id === videoId;
  //   });

  //   setCurrentVideo(newVideo);
  // }
//  if(!currentVideo){
//   return "Loading....."
//  }

  return (
    <>
    {currentVideo && ( <><VideoPlayer  currentVideo ={currentVideo}/>
      <div className="video-sections">
        <VideoDetails currentVideo ={currentVideo}/>
        
      </div> </>)}
     
    </>
  );
};

export default HomePage;
