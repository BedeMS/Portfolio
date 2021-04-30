import React from "react";
import "./ZoomCard.css";
import CardIcons from "../../../elements/CardIcons/CardIcons";

function ZoomCard(props) {
  return (
    <div className="ZoomCard" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="ZoomCard__depth">
        <h1 className="ZoomCard__title">{props.title}</h1>
        {props.details &&
          props.details.map((el) => {
            return <p className="ZoomCard__desc">{el}</p>;
          })}
      </div>
      <CardIcons stack={props.stack} />
    </div>
  );
}

export default ZoomCard;
