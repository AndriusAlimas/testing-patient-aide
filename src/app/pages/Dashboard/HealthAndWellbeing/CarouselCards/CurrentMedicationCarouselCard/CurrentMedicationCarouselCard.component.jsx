import React from "react";
import { useDispatch } from "react-redux";

import { DashboardCarouselCards } from "../../../../../components";

import medicationIcon from "../../../../../../assets/img/icons/dashboardMedicationIcon.svg";
import { getMedications } from "../../../../../../redux/slices/MedicationsSlice";

export default function CurrentMedicationCarouselCard() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(getMedications());
  };
  return (
    <>
      <DashboardCarouselCards
        title="Medications"
        icon={medicationIcon}
        bgColor1="#5e60ce"
        bgColor2="#6930c3"
        linkTo={"/Current-medication"}
        onClick={handleOnClick}
      />
    </>
  );
}
