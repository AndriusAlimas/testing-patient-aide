import React from "react";
import { Link } from "react-router-dom";
import { DashboardYourFilesCardsContainer } from "./DashboardYourFilesCards.elements";

export default function DashboardYourFilesCards({
  title,
  description,
  icon,
  bgColor1,
  bgColor2,
  route,
}) {
  return (
    <DashboardYourFilesCardsContainer bgColor1={bgColor1} bgColor2={bgColor2}>
      <Link to={route}>
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
    </DashboardYourFilesCardsContainer>
  );
}
