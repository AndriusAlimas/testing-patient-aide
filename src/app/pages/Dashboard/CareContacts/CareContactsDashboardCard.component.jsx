// Packages
import React from "react";

import { DashboardTopCards } from "../../../components";
import { getNOK } from "../../../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";

// Assets
import contactIcon from "../../../../assets/img/icons/Dashboard/contact.svg";
import careContactBackgroundImg from "../../../../assets/img/images/dashboard/dashboardCareContactsBackgroundImg.png";

export default function CareContactsDashboardCard() {
  const dispatch = useDispatch();
  // const handleOnClick = () => {
  //   console.log("in handle");

  //   dispatch(getNOK());
  // };

  return (
    <DashboardTopCards
      bgImg={careContactBackgroundImg}
      linkTo={"/caresphere"}
      title="Care Contacts"
      text="Important Contact Information"
      onClick={() => dispatch(getNOK())}
    />
  );
}
