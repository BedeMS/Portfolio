import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";

function Video(props) {
  return (
    <ReactPlayer
      className="Video"
      //   url="https://www.youtube.com/watch?v=Q5y6pwoE3cM"
      width="100%"
      height="100%"
      playing={true}
      controls={true}
    />
  );
}

export default Video;
