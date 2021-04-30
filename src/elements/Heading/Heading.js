import React from "react";
import "./Heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Heading(props) {
  return (
    <div className="Heading">
      <FontAwesomeIcon icon={["far", "circle"]} className="Heading__icon" />
      <p className="Heading__title">{props.title}</p>
    </div>
  );
}

export default Heading;
