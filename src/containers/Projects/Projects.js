import React from "react";
import Project from "../../components/Project/Project";
import data from "../../data/projects";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="Projects">
      <div className="Project__set">
        {data.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
