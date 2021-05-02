import React from "react";
import ReactPlayer from "react-player/lazy";
import "./Video.css";
import Practice from "../../assets/videos/practice.mov";

function Video(props) {
  return (
    <ReactPlayer
      className="Video"
      url={Practice}
      width="100%"
      height="100%"
      playing={true}
      muted={true}
      // controls={true}
    />
  );
}

export default Video;
