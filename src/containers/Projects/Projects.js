import React from "react";
import Nav from "../../components/Nav/Nav";
import Project from "../../components/Project/Project";
import trail from "../../assets/img/trail.png";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="Projects">
      <div className="Project__set">
        <Project />
        <Project />
        <Project zoom />
      </div>
      <img src={trail} className="map__trail" />
      <div className="Project__set">
        <Project />
        <Project zoom />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
