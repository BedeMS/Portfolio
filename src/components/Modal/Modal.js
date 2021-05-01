import React from "react";
import "./Modal.css";
import Site from "./Site/Site";

function Modal() {
  return (
    <div className="Modal-wrapper">
      <div className="Modal"></div>
      <div className="Modal__visit">
        <Site title="Github" background="#000000" />
        <Site title="Visit Website" background="#0047ff" />
      </div>
    </div>
  );
}

export default Modal;
