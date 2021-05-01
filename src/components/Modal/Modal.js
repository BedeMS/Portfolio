import React from "react";
import Site from "./Site/Site";
import Feature from "./Feature/Feature";
import Video from "../../elements/Video/Video";
import Jump from "react-reveal/Jump";
import "./Modal.css";

function Modal() {
  return (
    <div className="Modal-wrapper">
      <div className="Modal-container">
        <div className="Modal">
          <div className="Modal__video">
            <Video />
          </div>
          <Jump delay={3000} top>
            <p className="Modal__scroll">Scrrooollll</p>
          </Jump>

          <Feature reverse />
          <Feature />

          <Feature small />
          <Feature small reverse />
          <Feature />
          <Feature />
          <Feature />
        </div>
        <div className="Modal__links">
          <Site to="/" title="Github" background="#000000" />
          <Site to="/" title="Visit Website" background="#0047ff" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
