// Import: Packages
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// Import: Components
import { ProfilePopUp, PageHeader } from "../../components";
import HealthAndWellbeingCarousel from "./HealthAndWellbeing/Carousel/HealthAndWellbeingCarousel.components";
import AppointmentsSnippet from "../../components/AppointmentsSnippet/AppointmentsSnippet.component";
import YourFiles from "./YourFiles/YourFiles.component";
import DashboardHead from "./DashboardHead/DashboardHead.component";
import {
  NotificationsPopUp,
  VisitHistoryDashboardCard,
  CareContactsDashboardCard,
} from "../../pages";

// Import: Elements
import { SectionContainer } from "./Dashboard.elements";

export default function Dashboard({ sidebar }) {
  const uiTriggers = useSelector((state) => state.uiTriggers);
  const userDetails = useSelector((state) => {
    return state.user.userDetails;
  });

  return (
    <>
      <PageHeader
        title={`Welcome ${userDetails.firstname}`}
        notificationBell="true"
        profile="true"
        dashboard={true}
      />
      <motion.div
        initial={uiTriggers.pageTransitionsStyle.initial}
        animate={uiTriggers.pageTransitionsStyle.animate}
        exit={uiTriggers.pageTransitionsStyle.exit}
        transition={uiTriggers.pageTransitionsStyle.transition}
      >
        <SectionContainer sidebar={sidebar} data-testid="dashboard">
          {/* Mobile Version */}
          <div className="mobileVersion">
            {uiTriggers.notificationsStatus && <NotificationsPopUp />}
            {uiTriggers.profileStatus && <ProfilePopUp user={userDetails} />}
            <DashboardHead />
            <AppointmentsSnippet />
            <div id="dashboardVisitsAndContacts">
              <VisitHistoryDashboardCard />
              <CareContactsDashboardCard />
            </div>
            <HealthAndWellbeingCarousel />
            <YourFiles />
          </div>
        </SectionContainer>
      </motion.div>
    </>
  );
}
