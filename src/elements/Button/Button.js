import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button type={props.type} className="Button">
      {props.name}
    </button>
  );
}

export default Button;
