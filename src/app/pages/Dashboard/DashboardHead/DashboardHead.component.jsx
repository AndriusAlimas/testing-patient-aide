import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DashboardHeadContainer } from "./DashboardHead.elements";

import accountIcon from "../../../../assets/img/icons/account.svg";

// Import: Dummy Data
import { patient } from "../../../demo-data/dummyPatientData";
import { notifications } from "../../../demo-data/notificationData";
import { NotificationsBell } from "../../../components";
import { toggleNotificationsStatus } from "../../../../redux/slices/PopUpStatusSlice";
import { toggleProfileStatus } from "../../../../redux/slices/PopUpStatusSlice";

export default function DashboardHead() {
  const dispatch = useDispatch();

  return (
    <DashboardHeadContainer>
      <h1>Welcome {patient.firstName}</h1>
      <div
        id="accountIconBackground"
        onClick={() => dispatch(toggleProfileStatus(true))}
      >
        <img id="accountIcon" src={accountIcon} alt="profile Page" />
      </div>
      {notifications && (
        <div
          id="notificationMessage"
          onClick={() => dispatch(toggleNotificationsStatus(true))}
        >
          <div id="notificationText"><NotificationsBell dashboard={true} />You Have Notifications!</div>
        </div>
      )}
    </DashboardHeadContainer>
  );
}
