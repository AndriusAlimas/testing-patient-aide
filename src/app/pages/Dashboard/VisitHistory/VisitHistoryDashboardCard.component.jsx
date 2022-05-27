import React from "react";

import { DashboardTopCards } from "../../../components";

import historyBackgroundImg from "../../../../assets/img/images/dashboard/dashboardMyVisitsBackgroundImg.png";
import { useDispatch } from "react-redux";
import { getAllAppointments } from "../../../../redux/slices/AppointmentsSlice";

export default function VisitHistoryDashboardCard() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getAllAppointments());
  };

  return (
    <DashboardTopCards
      onClick={handleOnClick}
      bgImg={historyBackgroundImg}
      linkTo={"/my-visits"}
      title="Visit History"
      text="Information about your previous visits"
    />
  );
}
