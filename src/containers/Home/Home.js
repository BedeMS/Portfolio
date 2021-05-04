import React from "react";
import { Link } from "react-router-dom";
import jobIncBackground from "../../data/jobInc/jobincBackground.png";
import afroblockBackground from "../../data/afroBlock/afroblockBackground.png";
import khariBackground from "../../data/khari/khariBackground.png";
import myfinanceBackground from "../../data/myFinance/myfinanceBackground.png";
import visitEthiopiaBackground from "../../data/visitEthiopia/visitEthiopiaBackground.png";
import "./Home.css";

function Home() {
  return (
    <div className="Home__main">
      <div className="Intro main"></div>
    </div>
  );
}

export default Home;



{/* <div className="main Project">
<img src={jobIncBackground} alt="JobInc Background" />
</div>
<div className="main Project">
<img src={myfinanceBackground} alt="JobInc Background" />
</div>
<div className="main Project">
<img src={visitEthiopiaBackground} alt="JobInc Background" />
</div>
<div className="Final main">
<div className="FinalProject">
  <img src={khariBackground} alt="JobInc Background" />
</div>
<div className="More__container">
  <Link className="More__link" to="/Projects">
    More Projects
  </Link>
</div>
</div> */}