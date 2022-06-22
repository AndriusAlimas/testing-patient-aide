// Import: Packages
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

// Import: assets
import closeIcon from "../../../../../assets/img/icons/close-Icon.svg";
import questionnaireIcon from "../../../../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg";
import appointmentIcon from "../../../../../assets/img/icons/CalendarIcon.svg";

// Import: elements
import { NotificationStyles } from "./NotificationCard.elements";
import { removeNotification } from "../../../../../redux/slices/NotificationsSlice";

// Import: utils
import updateUserNotificationIds from "../../../../utils/updateUserNotificationIds";

export default function NotificationCard({ notification, index }) {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state) => state.user.checkingCredentialsResponse.data[0]._id
  );

  const handleClick = () => {
    dispatch(removeNotification(notification.id));
    updateUserNotificationIds(
      userId,
      notification.id,
      `${notification.type}Ids`
    );
  };

  return (
    <NotificationStyles data-testid={"notificationCard"}>
      <li id={index} onClick={handleClick}>
        <img
          className="notificationIcon"
          src={
            notification.type === "questionnaire"
              ? questionnaireIcon
              : notification.type === "appointment"
              ? appointmentIcon
              : null
          }
          alt="notification Icon"
        />
        <Link to={""}>
          <div className="notificationText">
            <h2 id="title">New {notification.type}</h2>
            <p>
              {" "}
              {notification.appointmentDate
                ? `On ${moment(notification.appointmentDate).format(
                    "DD/MM/YYYY MM:HH"
                  )}`
                : notification.questionnaireName
                ? notification.questionnaireName
                : null}
            </p>
          </div>
        </Link>
        <img id="closeIcon" src={closeIcon} alt="Close notification" />
      </li>
    </NotificationStyles>
  );
}
