import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="InputWrapper">
      {props.label ? (
        <label
          className={props.colorScheme === "dark" ? "LabelDark" : "Label"}
          htmlFor={props.name}
        >
          {props.label}:
        </label>
      ) : (
        ""
      )}
      <input
        className="Input"
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
