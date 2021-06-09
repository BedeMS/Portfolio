import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav({ isNavOpen, navToggle }) {
  const handleClick = () => {
    if (isNavOpen) navToggle();
  };
  return (
    <div className={`Nav ${isNavOpen && "Nav__view"}`}>
      <FontAwesomeIcon
        icon={["fas", "eye-slash"]}
        className="Nav__close"
        onClick={() => navToggle()}
      />
      <Link
        aria-label="Home Page"
        to="/"
        className="Nav__logo"
        onClick={handleClick}
      >
        Bede Marcos
      </Link>
      <div className="Nav__list">
        <Link
          aria-label="Learn about me"
          to="/About"
          className="Nav__list-item"
          onClick={handleClick}
        >
          About Me
        </Link>
        <Link
          aria-label="View my Projects"
          to="/Projects"
          className="Nav__list-item"
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          aria-label="Let's get in touch, Contact page"
          to="/Contact"
          className="Nav__list-item"
          onClick={handleClick}
        >
          Contact
        </Link>
      </div>
      <div className="Nav__social">
        <a
          href="https://www.github.com/BedeMS"
          target="_blank"
          el="noreferrer"
          className="Nav__social-icon github"
        >
          Github: BedeMarcos
        </a>
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
