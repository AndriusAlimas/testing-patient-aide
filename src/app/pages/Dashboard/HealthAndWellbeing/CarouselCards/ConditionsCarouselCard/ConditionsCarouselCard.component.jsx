import React from "react";
import { useDispatch } from "react-redux";

import { DashboardCarouselCards } from "../../../../../components";

import conditionsIcon from "../../../../../../assets/img/icons/dashboardConditionsIcon.svg";
import { getConditions } from "../../../../../../redux/slices/ConditionsSlice";

export default function ConditionsCarouselCard() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getConditions());
  };
  return (
    <>
      <DashboardCarouselCards
        title="Conditions"
        icon={conditionsIcon}
        bgColor1="#006992"
        bgColor2="#27476E"
        linkTo={"/my-conditions"}
        onClick={handleOnClick}
      />
    </>
  );
}
