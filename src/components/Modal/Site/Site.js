import React from "react";
import "./Site.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Site(props) {
  return (
    <a
      href={props.to}
      target="_blank"
      rel="noreferrer"
      className="Site"
      style={{ backgroundColor: `${props.background}` }}
    >
      {props.title === "Github" ? (
        <FontAwesomeIcon className="Site__icon" icon={["fab", "github"]} />
      ) : (
        <FontAwesomeIcon className="Site__icon" icon={["fas", "eye"]} />
      )}
      <p className="Site__link">{props.title}</p>
    </a>
  );
}

export default Site;