// Import: Packages
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// Import: Elements
import { SectionContainer } from "./MyVisits.elements";
import { ListViewContainer } from "../../../styles/ListsView/ListView.elements";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Assets
import visitHistoryIcon from "../../../../assets/img/icons/vistHistoryIcon.svg";
import rightArrow from "../../../../assets/img/icons/Left-Chevron.svg";

// Import: Components
import PageHeader from "../../../components/PageHeader/PageHeader.component";

export default function MyVisits({ sidebar }) {
  const encounters = useSelector((state) => {
    return state.encounters.allEncounters;
  });

  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);

  const encountersCopy = encounters ? [...encounters] : [];
  const visitsDateSorted = encountersCopy.sort((a, b) => {
    return new Date(b.encounterStartDate) - new Date(a.encounterStartDate);
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
            <img
              src={visitHistoryIcon}
              id="visitHistoryIcon"
              alt="Visit History"
            />
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
                            <strong>{encounter.class}</strong>
                            <br></br>
                            {moment(encounter.encounterStartDate).format(
                              "DD/MM/YYYY MM:HH"
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
