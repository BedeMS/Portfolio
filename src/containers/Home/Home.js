import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="Home__main">
        <div className="main Intro"></div>
        <div className="main Project"></div>
        <div className="main Project"></div>
        <div className="main Project"></div>
        <div className="main">
          <div className="FinalProject"></div>
          <div className="More"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
