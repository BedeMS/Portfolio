import React from "react";
import { Link } from "react-router-dom";
import "./Site.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Site(props) {
  return (
    <Link
      to={props.to}
      className="Site"
      style={{ backgroundColor: `${props.background}` }}
    >
      {props.title === "Github" ? (
        <FontAwesomeIcon className="Site__icon" icon={["fab", "github"]} />
      ) : (
        <FontAwesomeIcon className="Site__icon" icon={["fas", "eye"]} />
      )}
      <p className="Site__link">{props.title}</p>
    </Link>
  );
}

export default Site;
