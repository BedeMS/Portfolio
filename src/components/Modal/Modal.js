import React from "react";
import uniqid from "uniqid";
import Site from "./Site/Site";
import Feature from "./Feature/Feature";
import Video from "../../elements/Video/Video";
import Jump from "react-reveal/Jump";
import "./Modal.css";

function Modal(props) {
  const handleClick = () => {
    props.closeModal();
  };

  return (
    <div className="Modal-wrapper" onClick={handleClick}>
      <div className="Modal-container">
        <div className="Modal">
          <div className="Modal__video">
            <Video video={props.video} />
            <Jump delay={3000} top>
              <p className="Modal__scroll">Scrrooollll</p>
            </Jump>
          </div>
          {props.project.features.map((feature) => {
            return <Feature key={uniqid()} {...feature} />;
          })}
        </div>
        <div className="Modal__links">
          <Site to={props.project.link} title="Github" background="#000000" />
          <Site
            to={props.project.github}
            title="Visit Website"
            background="#0047ff"
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
