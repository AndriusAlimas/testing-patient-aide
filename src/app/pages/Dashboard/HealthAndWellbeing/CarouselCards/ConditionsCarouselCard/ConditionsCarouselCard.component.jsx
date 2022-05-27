import React from "react";

import { DashboardCarouselCards } from "../../../../../components";

import conditionsIcon from "../../../../../../assets/img/icons/dashboardConditionsIcon.svg";

export default function ConditionsCarouselCard() {
  return (
    <>
      <DashboardCarouselCards
        title="Conditions"
        icon={conditionsIcon}
        bgColor1="#006992"
        bgColor2="#27476E"
        linkTo={"/my-conditions"}
      />
    </>
  );
}
