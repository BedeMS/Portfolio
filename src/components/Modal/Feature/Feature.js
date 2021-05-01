import React from "react";
import "./Feature.css";
import Fade from "react-reveal/Fade";

function Feature(props) {
  return (
    <div
      className={`Feature ${props.small && "small"} ${
        props.reverse && "reverse"
      }`}
    >
      <div className="Feature__info">
        <Fade right delay={1000}>
          <p className="Feature__desc">Animate Group</p>
          <p className="Feature__desc">Animate Group</p>
          <p className="Feature__desc">Animate Group</p>
          <p className="Feature__desc">Animate Group</p>
        </Fade>
      </div>
      <Fade left delay={2000}>
        <div className="Feature__img">
          <img alt="Feature Image" />
        </div>
      </Fade>
    </div>
  );
}

export default Feature;
