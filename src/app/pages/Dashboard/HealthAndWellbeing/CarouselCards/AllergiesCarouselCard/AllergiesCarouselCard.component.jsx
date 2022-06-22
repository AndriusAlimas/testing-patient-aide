import React from "react";

import { DashboardCarouselCards } from "../../../../../components";

import allergyIcon from "../../../../../../assets/img/icons/dashboardAllergiesIcon.svg";
import { useDispatch } from "react-redux";
import { getAllergies } from "../../../../../../redux/slices/Allergies";

export default function AllergiesCarouselCard() {
  const dispatch = useDispatch();
  const handleOnClick = ()=>{
    dispatch(getAllergies());
  }
  return (
    <>
      <DashboardCarouselCards
        title="Allergies"
        icon={allergyIcon}
        bgColor1="#FE6F61"
        bgColor2="#C94135"
        linkTo={"/my-allergies"}
        onClick={handleOnClick}
      />
    </>
  );
}
