// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: assets
import closeIcon from "../../../../../assets/img/icons/close-Icon.svg";

// Import: elements
import { NotificationStyles } from "./NotificationCard.elements";

export default function NotificationCard({
  notification,
  index,
  closeNotification,
}) {
  return (
    <NotificationStyles data-testid={"notificationCard"}>
      <li id={index} onClick={closeNotification}>
        <img className="notificationIcon" src={notification.icon} />
        <Link to={notification.linkTo}>
          <div className="notificationText">
            <h2 id="title">{notification.type}</h2>
            <p>{notification.message}</p>
          </div>
        </Link>
        <img id="closeIcon" src={closeIcon} alt="Close notification" />
      </li>
    </NotificationStyles>
  );
}
