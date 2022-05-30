import React from "react";

import { DashboardCarouselCards } from "../../../../../components";

import allergyIcon from "../../../../../../assets/img/icons/dashboardAllergiesIcon.svg";

export default function AllergiesCarouselCard() {
  return (
    <>
      <DashboardCarouselCards
        title="Allergies"
        icon={allergyIcon}
        bgColor1="#FE6F61"
        bgColor2="#C94135"
        linkTo={"/my-allergies"}
      />
    </>
  );
}
