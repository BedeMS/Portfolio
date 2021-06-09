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
          residing in Toronto, Canada. I enjoy looking for new opportunities
          around the world and I'm always looking to experience new things. In the
          past year, I've been working on projects that provide solutions to
          problems that exist in the market. <br></br>Ex: Visit Ethiopia. Ethiopia
          lacks a modern tourism website that displays all its history and
          culture along with important information for our tourists. This
          project takes the opportunity to show our visitors what Ethiopia has to
          offer. <br></br> The motivation to create these projects comes from
          the energy I get in venturing into new problems and all its possibilities. Even then,
          designing and executing on ideas like Khari has been challenging
          because of its complexity with categories, products, and a complete
          cart.
          <br></br>As a developer, I'm always looking forward to working on new
          challenges and meeting people along the way.
        </p>
        <ul className="Desc__interests">
          <li className="Desc__interests-title">My Interests</li>
          <li className="Desc__interests-item">Investments and Securities</li>
          <li className="Desc__interests-item">Arsenal Arsenal Arsenal</li>
          <li className="Desc__interests-item">Start-ups</li>
          <li className="Desc__interests-item">Motor Bikes </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
