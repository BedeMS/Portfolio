import React from "react";
import "./ZoomCard.css";
import CardIcons from "../../../elements/CardIcons/CardIcons";
import uniqid from "uniqid";

function ZoomCard(props) {
  const handleClick = () => {
    props.handleClick(props.id);
  };

  return (
    <div
      onClick={handleClick}
      className="ZoomCard"
      style={{ backgroundImage: `url(${props.backgroundImg})` }}
    >
      <div className="ZoomCard__depth">
        <h1 className="ZoomCard__title">{props.title}</h1>
        {props.details &&
          props.details.map((el) => {
            return (
              <p key={uniqid()} className="ZoomCard__desc">
                {el}
              </p>
            );
          })}
      </div>
      <CardIcons stack={props.stack} />
    </div>
  );
}

export default ZoomCard;
