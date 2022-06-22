import React from "react";
import { Link } from "react-router-dom";

import { CardContainer } from "./DashboardCarouselCards.elements";

export default function DashboardCarouselCards({
  icon,
  title,
  linkTo,
  bgColor1,
  bgColor2,
  iconColor,
  onClick,
}) {
  return (
    <CardContainer
      onClick={onClick}
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      iconColor={iconColor}
    >
      <Link to={linkTo}>
        <div id="iconBg">
          <img src={icon} alt={title} />
        </div>
        <h1 id="title">{title}</h1>
      </Link>
    </CardContainer>
  );
}
