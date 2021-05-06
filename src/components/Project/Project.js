import React from "react";
import "./Project.css";
import Card from "../Card/Card";
import ZoomCard from "../Card/Zoom/ZoomCard";

function Project(props) {
  return (
    <div className="Project">
      <div className="Project__card">
        {props.zoom ? (
          <ZoomCard
            id={props.id}
            backgroundImg={props.backgroundImg}
            title={props.title}
            stack={props.stack}
            details={props.details}
            handleClick={props.handleClick}
          />
        ) : (
          <Card
            id={props.id}
            backgroundImg={props.backgroundImg}
            title={props.title}
            stack={props.stack}
            details={props.details}
            handleClick={props.handleClick}
          />
        )}
      </div>
    </div>
  );
}

export default Project;

// title={props.title}
