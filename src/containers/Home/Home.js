import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home({history, openModal }) {
  const handleClick = (e) => {
    const id = e.target.id;
    history.push("/Projects");
    openModal(id);
  };

  return (
    <div className="Home__main">
      <div className="Intro">
        <h1 className="Intro__b">B</h1>
        <div className="perspective">
          <div className="Project__a">
            <div className="project__in"></div>
            <h1 className="Project__title" id="jobInc" onClick={handleClick}>
              Job Inc.
            </h1>
          </div>
          <div className="Project__b">
            <div className="project__in"></div>
            <h1
              className="Project__title"
              id="visitEthiopia"
              onClick={handleClick}
            >
              Visit Ethiopia
            </h1>
          </div>
        </div>
      </div>
      <div className="Intro">
        <h1 className="Intro__m">M</h1>
        <div className="perspective">
          <div className="Project__c">
            <div className="project__in"></div>
            <h1 className="Project__title" id="webDev" onClick={handleClick}>
              Web Dev Roadmap
            </h1>
          </div>
          <div className="Project__d">
            <div className="project__in"></div>
            <Link to="/Projects" className="Project__More">
              More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


