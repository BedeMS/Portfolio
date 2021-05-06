import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav({ isNavOpen, navToggle }) {
  return (
    <div className={`Nav ${isNavOpen && "Nav__view"}`}>
      <FontAwesomeIcon
        icon={["fas", "eye-slash"]}
        className="Nav__close"
        onClick={() => navToggle()}
      />
      <Link to="/" className="Nav__logo">
        Bede Marcos
      </Link>
      <div className="Nav__list">
        <Link
          to="/About"
          className="Nav__list-item"
          onClick={isNavOpen ? () => navToggle() : ""}
        >
          About
        </Link>
        <Link
          to="/Projects"
          className="Nav__list-item"
          onClick={isNavOpen ? () => navToggle() : ""}
        >
          Projects
        </Link>
        <Link
          to="/Contact"
          className="Nav__list-item"
          onClick={isNavOpen ? () => navToggle() : ""}
        >
          Contact
        </Link>
      </div>
      <div className="Nav__social">
        <Link to="/" className="Nav__social-icon github">
          Github: BedeMarcos
        </Link>
        {/* <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Link>
        <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
        <Link to="/" className="Nav__social-icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
