import React from "react";
import { Link } from "react-router-dom";
import { MyVisitDetailsCardContainer } from "./MyVisitDetailsCardElements";

export default function MyVisitDetailsCard({
  linkTo,
  title,
  description,
  icon,
  encounter,
  bgColor1,
  bgColor2
}) {
  return (
    <MyVisitDetailsCardContainer  bgColor1={bgColor1} bgColor2={bgColor2}>
      <Link to={linkTo} state={{ encounter }}>
        <div id="cardText">
          <h2 id="title">{title}</h2>
          <p id="description">{description}</p>
        </div>
        <div id="iconContainer">
          <div id="icon">
            <img src={icon} alt={title} />
          </div>
        </div>
      </Link>
    </MyVisitDetailsCardContainer>
  );
}
