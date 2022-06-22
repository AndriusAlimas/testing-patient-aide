import React from "react";
import { Link } from "react-router-dom";
import { MyVisitDetailsCardContainer } from "./MyVisitDetailsCardElements";
import { useDispatch } from "react-redux";
import { getMedications } from "../../../../../../redux/slices/MedicationsSlice";

export default function MyVisitDetailsCard({
  linkTo,
  title,
  description,
  icon,
  encounter,
  bgColor1,
  bgColor2,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getMedications());
  };
  return (
    <MyVisitDetailsCardContainer bgColor1={bgColor1} bgColor2={bgColor2}>
      <Link to={linkTo} state={{ encounter }} onClick={handleClick}>
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
