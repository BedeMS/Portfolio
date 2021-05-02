import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="Nav">
      <Link to="/" className="Nav__logo">
        Bede Marcos
      </Link>
      <div className="Nav__list">
        <Link to="/About" className="Nav__list-item">
          About
        </Link>
        <Link to="/Projects" className="Nav__list-item">
          Projects
        </Link>
        <Link to="/Contact" className="Nav__list-item">
          Contact
        </Link>
      </div>
      <div className="Nav__social">
        <Link to="/" className="Nav__social-icon github">
          Github: BedeMarcos
        </Link>
        <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Link>
        <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
        <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
