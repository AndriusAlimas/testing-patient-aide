// Import: Packages
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import: Elements
import { HeaderContainer } from "./PageHeader.elements";

// Import: Assets
import BackArrow from "../../../assets/img/icons/Left-Chevron.svg";

// Import: Component../SortBy/SortBy.component

import NotificationsBell from "./Notifications/NotificationsBell/NotificationsBell.component";
import ProfileIcon from "./Profile/ProfileIcon/ProfileIcon.component";

// component
export default function PageHeader({
  title,
  returnRoute,
  sortFunction,
  notifications,
  profile,
  dashboard,
  encounter,
}) {
  const { scrollYStatus } = useSelector((state) => state.scrollYStatus);
  return (
    <HeaderContainer
      scrollYStatus={scrollYStatus}
      profile={profile}
      dashboard={dashboard}
    >
      {notifications && <NotificationsBell />}
      <h1 id="headerTitle">{title}</h1>
      {profile && <ProfileIcon />}
      {returnRoute && (
        <Link to={`${returnRoute}`} state={{ encounter }}>
          <div id="buttonContainer">
            <img id="backArrow" src={BackArrow} />
            <p className="backButton">Back</p>
          </div>
        </Link>
      )}
    </HeaderContainer>
  );
}
