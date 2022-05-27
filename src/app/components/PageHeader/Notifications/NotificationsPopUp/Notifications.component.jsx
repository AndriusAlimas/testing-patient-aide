// Import: Packages
import React, { useState } from "react";

// Import: Components
import { GenericPopUp } from "../../../index";
import NotificationCard from "../NotificationCard/NotificationCard.component";

// Import: DummyData
import { notifications } from "../../../../demo-data/notificationData";

// Component: Notifications
export default function NotificationsPopUp({
}) {
  
  const [displayNotifications, setDisplayNotifications] =
    useState(notifications);

  function closeNotification(index) {
    setDisplayNotifications((notification) =>
      notification.filter((item, i) => i !== index)
    );
  }

  return (
    <GenericPopUp
      data-testid={"notifications"}
      title="Notifications"
    >
      <ul>
        {displayNotifications.map((notification, index) => (
          <div key={index}>
            <NotificationCard
              notification={notification}
              closeNotification={() => closeNotification(index)}
            />
          </div>
        ))}
      </ul>
    </GenericPopUp>
  );
}
