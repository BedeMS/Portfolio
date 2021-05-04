import React from "react";
import ReactPlayer from "react-player/lazy";
import "./Video.css";

function Video(props) {
  return (
    <ReactPlayer
      className="Video"
      url={props.video}
      width="100%"
      height="100%"
      playing={true}
      muted={true}
      controls={true}
    />
  );
}

export default Video;
