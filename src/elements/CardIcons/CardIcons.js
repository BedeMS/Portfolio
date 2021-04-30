import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";
import "./CardIcons.css";

function CardIcons(props) {
  return (
    <div className="CardIcons">
      {props.stack.map((el) => {
        return (
          <FontAwesomeIcon
            key={uniqid()}
            id={`Card-${el}`}
            className={`Card__icon`}
            icon={["fab", `${el}`]}
          />
        );
      })}
    </div>
  );
}

export default CardIcons;
