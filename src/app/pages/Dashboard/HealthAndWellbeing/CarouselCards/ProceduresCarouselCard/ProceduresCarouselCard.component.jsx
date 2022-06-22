import React from "react";
import { useDispatch } from "react-redux";

import { DashboardCarouselCards } from "../../../../../components";
import { getProcedures } from "../../../../../../redux/slices/ProceduresSlice";

import proceduresIcon from "../../../../../../assets/img/icons/dashboardProceduresIcon.svg";

export default function ProceduresCarouselCard() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(getProcedures());
  };

  return (
    <>
      <DashboardCarouselCards
        title="Procedures"
        icon={proceduresIcon}
        bgColor1="#05949C"
        bgColor2="#046D6F"
        linkTo={"/my-procedures"}
        onClick={handleOnClick}
      />
    </>
  );
}
