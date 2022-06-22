// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Import: Components
import { GenericPopUp } from "../../../index";
import NotificationCard from "../NotificationCard/NotificationCard.component";

// Import: DummyData
import { notifications } from "../../../../demo-data/notificationData";

// Component: Notifications
export default function NotificationsPopUp() {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  return (
    <GenericPopUp data-testid={"notifications"} title="Notifications">
      <ul>
        {notifications.map((notification, index) => (
          <div key={index}>
            <NotificationCard notification={notification} />
          </div>
        ))}
      </ul>
    </GenericPopUp>
  );
}
