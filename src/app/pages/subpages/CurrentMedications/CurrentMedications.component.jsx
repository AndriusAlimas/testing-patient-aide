// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Import: Elements
import { SectionContainer } from "./CurrentMedications.elements";
import { ListViewContainer } from "../../../styles/ListsView/ListView.elements";

// Import: Components
import MedicationDetails from "./MedicationDetails/MedicationDetails.component";
import { PageHeader } from "../../../components";

// Import: Assets
import rightArrow from "../../../../assets/img/icons/Left-Chevron.svg";
import medicationIcon from "../../../../assets/img/icons/dashboardMedicationIcon.svg";

// Import: DummyData
import { ENC0004141, medicationInfo } from "../../../demo-data/dummyMedication";

// Component: MyConditions
export default function CurrentMedications({ sidebar }) {
  const location = useLocation();

  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const medicationID = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer sidebar={sidebar} data-testid="currentMedicationsList">
        <div className="mobileVersion">
          {popUp ? (
            <MedicationDetails
              popUp={popUp}
              setPopUp={setPopUp}
              medicationID={medicationID}
              medicationInfo={medicationInfo}
            />
          ) : null}
          <PageHeader
            title={"Current Medication"}
            encounter={location.state?.encounter}
            returnRoute={location.state ? "/my-visit-details" : "/dashboard"}
          />
          <div id="iconBg">
            <img id="medicationsIcon" src={medicationIcon} />
          </div>
          <ListViewContainer>
            <ul className="medicationsList">
              {ENC0004141.map((med, index) => (
                <li
                  id="cardContainer"
                  key={index}
                  onClick={() =>
                    setPopUp(!popUp, (medicationID.current = med.id))
                  }
                >
                  <div id="cardLayout">
                    <div id="cardTextContainer">
                      <h2 id="cardHeader">{med.name}</h2>
                      <div className="arrowIcon">
                        <p>Details</p>
                        <img src={rightArrow} alt="right arrow" />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ListViewContainer>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
