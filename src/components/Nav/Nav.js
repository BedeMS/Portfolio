import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="Nav">
      <Link className="Nav__logo">Bede Marcos</Link>
      <div className="Nav__list">
        <Link className="Nav__list-item">About</Link>
        <Link className="Nav__list-item">Projects</Link>
        <Link className="Nav__list-item">Contact</Link>
      </div>
      <div className="Nav__social">
        <Link className="Nav__social-icon github">Github: BedeMarcos</Link>
        <Link className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Link>
        <Link className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
        <Link className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
