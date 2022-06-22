import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DashboardHeadContainer } from "./DashboardHead.elements";

import accountIcon from "../../../../assets/img/icons/account.svg";

import { patient } from "../../../demo-data/dummyPatientData";
import { NotificationsBell } from "../../../components";
import {
  toggleNotificationsStatus,
  toggleProfileStatus,
} from "../../../../redux/slices/UITriggers";

export default function DashboardHead() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

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
          {notifications.length > 0 && (
            <div id="notificationText">
              <NotificationsBell dashboard={true} />
              You Have <span id="numOfNotifications">{notifications.length}</span> Notifications!
            </div>
          )}
        </div>
      )}
    </DashboardHeadContainer>
  );
}
