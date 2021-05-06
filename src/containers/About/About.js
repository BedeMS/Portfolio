import React from "react";
import Profile from "../../assets/img/profile.jpeg";
import Progress from "../../components/Progress/Progress";
import "./About.css";

function About(props) {
  return (
    <div className="About">
      <div className="LeftSide">
        <div className="Photo">
          <img src={Profile} alt="About" />
        </div>
        <div className="Skills">
          <Progress label="HTML5/CSS/SASS" width="90" />
          <Progress label="Javascript" width="80" />
          <Progress label="React" width="70" />
          <Progress label="Node" width="50" />
          <Progress label="Python" width="0" goal="Goal: End of 2021" />
        </div>
      </div>
      <div className="Desc">
        <p className="Desc__about">
          Usually, the source of truth is implemented in the component that
          needs it for rendering. So in our case, we manage state in our
          containing app component at the very top. From this app component,
          data is passed down the component tree via props. Usually, the source
          of truth is implemented in the component that needs it for rendering.
          So in our case, we manage state in our containing app component at the
          very top. From this app component, data is passed down the component
          tree via props. Usually, the source of truth is implemented in the
          component that needs it for rendering. So in our case, we manage state
          in our containing app component at the very top. From this app
          component, data is passed down the component tree via props.
        </p>
        <ul className="Desc__interests">
          <li className="Desc__interests-title">My Interests</li>
          <li className="Desc__interests-item">
            Usually, the source of truth is implemented
          </li>
          <li className="Desc__interests-item">
            Usually, the source of truth is implemented
          </li>
          <li className="Desc__interests-item">
            Usually, the source of truth is implemented
          </li>
          <li className="Desc__interests-item">
            Usually, the source of truth is implemented
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
