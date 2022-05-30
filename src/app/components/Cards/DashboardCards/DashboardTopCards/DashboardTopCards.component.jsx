import React from "react";
import { Link } from "react-router-dom";

import { CardContainer } from "./DashboardTopCards.elements";

export default function DashboardTopCards({
  linkTo,
  title,
  text,
  bgImg,
}) {
  return (
    <CardContainer bgImg={bgImg}>
      <Link to={linkTo}>
        <div id="textContainer">
          <h1 id="title">{title}</h1>
          <p id="text">{text}</p>
        </div>
      </Link>
    </CardContainer>
  );
}
