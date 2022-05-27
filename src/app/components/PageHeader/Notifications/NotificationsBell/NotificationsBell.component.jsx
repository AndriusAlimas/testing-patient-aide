import React from "react";
import { useDispatch, useSelector } from "react-redux";

import notifications from "../../../../../assets/img/icons/notifications.svg";
import { toggleNotificationsStatus } from "../../../../../redux/slices/PopUpStatusSlice";

import { NotificationBellContainer } from "./NotificationsBell.elements";

export default function NotificationsBell({ dashboard }) {
  const dispatch = useDispatch();
  const { notificationsStatus } = useSelector((state) => state.popUpStatus);

  return (
    <NotificationBellContainer dashboard={dashboard}>
      <img
        id="notificationBell"
        alt="Notification bell"
        src={notifications}
        onClick={() =>
          dispatch(toggleNotificationsStatus(!notificationsStatus))
        }
      />
    </NotificationBellContainer>
  );
}
