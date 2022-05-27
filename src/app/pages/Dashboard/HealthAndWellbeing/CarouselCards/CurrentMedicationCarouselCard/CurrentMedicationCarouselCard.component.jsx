import React from "react";

import { DashboardCarouselCards } from "../../../../../components";

import medicationIcon from "../../../../../../assets/img/icons/dashboardMedicationIcon.svg";

export default function CurrentMedicationCarouselCard() {
  return (
    <>
      <DashboardCarouselCards
        title="Medications"
        icon={medicationIcon}
        bgColor1="#5e60ce"
        bgColor2="#6930c3"
        linkTo={"/Current-medications"}
      />
    </>
  );
}
