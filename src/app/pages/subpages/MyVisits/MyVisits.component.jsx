// Import: Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// Import: Elements
import { SectionContainer } from "./MyVisits.elements";
import { ListViewContainer } from "../../../Styles/ListsView/ListView.elements";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Assets
import visitHistoryIcon from "../../../../assets/img/icons/vistHistoryIcon.svg";
import rightArrow from "../../../../assets/img/icons/Left-Chevron.svg";

// Import: Components
import PageHeader from "../../../components/PageHeader/PageHeader.component";

// Import: DummyData
import { encounters } from "../../../demo-data/dummyVisits";

// Component: Medication
export default function MyVisits({ sidebar }) {
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const appointments = useSelector(({ appointments }) => {
    return appointments.allAppointments;
  });
 console.log(appointments)
  const appointmentsCopy = appointments ?[...appointments]:[] ;
  const visitsDateSorted = appointmentsCopy.sort((a, b) => {
    return new Date(b.start) - new Date(a.start);
  });

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer sidebar={sidebar} data-testid="medications">
        <div className="mobileVersion">
          <PageHeader title={"My Visits"} returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img src={visitHistoryIcon} id="visitHistoryIcon" />
          </div>
          <ListViewContainer>
            <ul>
              {visitsDateSorted.map((encounter, index) => {
                return (
                  <Link
                    key={index}
                    // to={{
                    to="/my-visit-details"
                    state={{ encounter }}
                    // }}
                  >
                    {/* <Link key={index} to="/my-visit-details"> */}
                    <li id="cardContainer">
                      <div id="cardTextContainer">
                        <h2 id="cardHeader">{encounter.serviceType}</h2>
                        <div className="cardDetailText">
                          <p>
                            {" "}
                            {moment(encounter.start).format(
                              "DD/MM/YYYY MM:HHa"
                            )}
                          </p>
                        </div>
                        <div className="arrowIcon">
                          <p>Details</p>
                          <img src={rightArrow} alt="right arrow" />
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </ListViewContainer>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
