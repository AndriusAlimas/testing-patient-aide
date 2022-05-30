// Import: Packages
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// Import: Components
import { ProfilePopUp, PageHeader } from "../../components";
import HealthAndWellbeingCarousel from "./HealthAndWellbeing/Carousel/HealthAndWellbeingCarousel.components";
import DashboardCalendar from "../../components/Calendar/DashboardCalendar.component";
import YourFiles from "./YourFiles/YourFiles.component";
import DashboardHead from "./DashboardHead/DashboardHead.component";
import {
  NotificationsPopUp,
  VisitHistoryDashboardCard,
  CareContactsDashboardCard,
} from "../../pages";

// Import: Elements
import { SectionContainer } from "./Dashboard.elements";

// Import: dummyData
import { patient } from "../../demo-data/dummyPatientData";

export default function Dashboard({ sidebar }) {
  const { notificationsStatus } = useSelector((state) => state.popUpStatus);
  const { profileStatus } = useSelector((state) => state.popUpStatus);
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const date = new Date();

  return (
    <>
      <PageHeader
        title={`Welcome ${patient.firstName}`}
        notifications="true"
        profile="true"
        dashboard={true}
      />
      <motion.div
        initial={pageTransitionsStyle.initial}
        animate={pageTransitionsStyle.animate}
        exit={pageTransitionsStyle.exit}
        transition={pageTransitionsStyle.transition}
      >
        <SectionContainer sidebar={sidebar} data-testid="dashboard">
          {/* Mobile Version */}
          <div className="mobileVersion">
            {notificationsStatus && <NotificationsPopUp />}
            {profileStatus && <ProfilePopUp />}
            <DashboardHead />
            <DashboardCalendar todayDate={date} />
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
