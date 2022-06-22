// Packages
import React from "react";

import { DashboardTopCards } from "../../../components";
import { getNextOfKin } from "../../../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";

// Assets
import contactIcon from "../../../../assets/img/icons/Dashboard/contact.svg";
import careContactBackgroundImg from "../../../../assets/img/images/dashboard/dashboardCareContactsBackgroundImg.png";

export default function CareContactsDashboardCard() {
  const dispatch = useDispatch();

  return (
    <DashboardTopCards
      bgImg={careContactBackgroundImg}
      linkTo={"/caresphere"}
      title="Care Contacts"
      text="Important Contact Information"
      onClick={() => dispatch(getNextOfKin())}
    />
  );
}
