import React from "react";
import "./Card.css";
import CardIcons from "../../elements/CardIcons/CardIcons";
import Button from "../../elements/Button/Button";
import uniqid from "uniqid";

function Card(props) {
  return (
    <div className="Card__container">
      <div className="Card">
        <div
          className="Card__content Card-front"
          style={{ backgroundImage: `url(${props.backgroundImg})` }}
        >
          <div className="Card__depth">
            <div className="Card__front-icons">
              <CardIcons stack={props.stack} />
            </div>
          </div>
        </div>
        <div className="Card__content Card-back">
          <div className="Card__depth">
            <h1 className="Card__title">{props.title}</h1>
            {props.details &&
              props.details.map((el) => {
                return (
                  <p key={uniqid()} className="Card__desc">
                    {el}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
