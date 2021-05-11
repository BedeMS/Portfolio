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
          Hi, I'm Bede Marcos. I'm a front-end developer that's currently
          residing in Toronto. I enjoy looking for opportunities in the world
          and trying to experience new things. In the past year, I've been
          working on projects that I think are solutions to problems in the
          market. <br></br>Ex: Visit Ethiopia. This project takes the
          opportunity to show tourist what Ethiopia has to offer. Ethiopia lacks
          a modern tourism website that displays all its history and culture
          along with important information for our visitors. <br></br> The
          motivation to create these projects comes from the opportunity they
          present in the world. Even then designing and executing on ideas like
          Khari have been challenging because its complexity with product
          categories, products, and a cart.
          <br></br>I'm always looking forward to working on new challenges and
          meeting people along the way.
        </p>
        <ul className="Desc__interests">
          <li className="Desc__interests-title">My Interests</li>
          <li className="Desc__interests-item">Investments and Securities</li>
          <li className="Desc__interests-item">Arsenal Arsenal Arsenal</li>
          <li className="Desc__interests-item">Start-ups</li>
          <li className="Desc__interests-item">Riding Motor Bikes</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
