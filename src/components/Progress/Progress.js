import React, { useEffect } from "react";
import "./Progress.css";

const ProgressLine = (props) => {
  const backgroundColor = () => {
    if (props.width < 50) {
      return "#d40000";
    } else if (props.width < 80) {
      return "#d0d407";
    } else {
      return "#008d07";
    }
  };

  return (
    <div className="Progress">
      <p className="Progress__label">{props.label}</p>
      <div className="Bar">
        {props.goal && <p className="Progress__goal">{props.goal}</p>}
        <div
          className="Inner__bar"
          style={{
            backgroundColor: backgroundColor(),
            width: `${props.width}%`,
          }}
        >
          <span className="Progress__amount">
            {props.width === "0" ? "" : `${props.width}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressLine;
