import React from "react";
import uniqid from "uniqid";
import Fade from "react-reveal/Fade";
import "./Feature.css";

function Feature(props) {
  return (
    <div
      className={`Feature ${props.small && "small"} ${
        props.reverse && "reverse"
      }`}
    >
      <div className="Feature__info">
        <Fade right delay={500}>
          {props.desc.map((item) => {
            return (
              <p key={uniqid()} className="Feature__desc">
                {item}
              </p>
            );
          })}
          <p>  </p>
        </Fade>
      </div>
      <Fade left delay={500}>
        <div className="Feature__img">
          <img src={props.featureImg} alt="Feature" />
        </div>
      </Fade>
    </div>
  );
}

export default Feature;
