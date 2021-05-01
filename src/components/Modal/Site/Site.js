import React from "react";
import "./Site.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Site(props) {
  return (
    <div className="Site" style={{ backgroundColor: `${props.bacground}` }}>
      {props.title === "github" ? (
        <FontAwesomeIcon className="Site__icon" icon={["fab", "github"]} />
      ) : (
        <FontAwesomeIcon className="Site__icon" icon={["fas", "eye"]} />
      )}
      <p className="Site__link">{props.title}</p>
    </div>
  );
}

export default Site;
