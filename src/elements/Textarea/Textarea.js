import React from "react";
import "./Textarea.css";

function Textarea(props) {
  return (
    <div className="TextareaWrapper">
      {props.label ? (
        <label className="LabelDark" htmlFor={props.name}>
          {props.label}:
        </label>
      ) : (
        ""
      )}
      <textarea
        // rows="60"
        className="Textarea"
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Textarea;
