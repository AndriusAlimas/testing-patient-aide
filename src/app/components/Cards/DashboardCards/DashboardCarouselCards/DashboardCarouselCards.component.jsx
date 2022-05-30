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
}) {
  return (
    <CardContainer
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      iconColor={iconColor}
    >
      <Link to={linkTo}>
        <div id="iconBg">
          <img src={icon} />
        </div>
        <h1 id="title">{title}</h1>
      </Link>
    </CardContainer>
  );
}
