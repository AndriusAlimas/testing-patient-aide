import React from "react";

import { DashboardCarouselCards } from "../../../../../components";

import proceduresIcon from "../../../../../../assets/img/icons/dashboardProceduresIcon.svg";

export default function ProceduresCarouselCard() {
  return (
    <>
      <DashboardCarouselCards
        title="Procedures"
        icon={proceduresIcon}
        bgColor1="#05949C"
        bgColor2="#046D6F"
        linkTo={"/my-procedures"}
      />
    </>
  );
}


