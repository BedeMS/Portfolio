import React from "react";
import Heading from "../../elements/Heading/Heading";
import "./Project.css";
import Card from "../Card/Card";
import ZoomCard from "../Card/Zoom/ZoomCard";
import Modal from "../Modal/Modal";

function Project(props) {
  return (
    <div className="Project">
      {/* <Modal /> */}
      <div className="Project__card">
        {props.zoom ? (
          <ZoomCard
            backgroundImg={props.backgroundImg}
            title={props.title}
            stack={props.stack}
            details={props.details}
          />
        ) : (
          <Card
            backgroundImg={props.backgroundImg}
            title={props.title}
            stack={props.stack}
            details={props.details}
          />
        )}
      </div>
    </div>
  );
}

export default Project;

// title={props.title}
