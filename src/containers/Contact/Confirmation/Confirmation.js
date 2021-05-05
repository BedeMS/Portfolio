import React from "react";
import "./Confirmation.css";

function Confirmation(props) {
  return (
    <div className="Contact">
      <div className="Confirmation">
        <h1 className="Confirmation__title">Thank You for your message.</h1>
        <p className="Confirmation__desc">
          I've recieved your email and will respond as soon as possible. I
          appreciate you for taking the time to look through my portfolio.
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
