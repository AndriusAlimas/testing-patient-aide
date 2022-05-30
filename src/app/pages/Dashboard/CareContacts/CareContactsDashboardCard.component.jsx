// Packages
import React from "react";

import { DashboardTopCards } from "../../../components";

// Assets
import careContactBackgroundImg from "../../../../assets/img/images/dashboard/dashboardCareContactsBackgroundImg.png"

export default function CareContactsDashboardCard() {
  return (
    <DashboardTopCards
      bgImg={careContactBackgroundImg}
      linkTo={"/caresphere"}
      title="Care Contacts"
      text="Important Contact Information"
    />
  );
}
