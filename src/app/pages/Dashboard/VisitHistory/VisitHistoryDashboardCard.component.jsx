import React from "react";

import { DashboardTopCards } from "../../../components";

import historyBackgroundImg from "../../../../assets/img/images/dashboard/dashboardMyVisitsBackgroundImg.png"

export default function VisitHistoryDashboardCard() {
  return (
    <DashboardTopCards
      bgImg={historyBackgroundImg}
      linkTo={"/my-visits"}
      title="Visit History"
      text="Information about your previous visits"
    />
  );
}
