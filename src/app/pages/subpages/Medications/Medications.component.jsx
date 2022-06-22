// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Import: Elements
import { SectionContainer } from "./Medications.elements";
import { ListViewContainer } from "../../../styles/ListsView/ListView.elements";

// Import: Components
import MedicationDetails from "./MedicationDetails/MedicationDetails.component";
import { PageHeader } from "../../../components";

// Import: Assets
import rightArrow from "../../../../assets/img/icons/Left-Chevron.svg";
import medicationIcon from "../../../../assets/img/icons/dashboardMedicationIcon.svg";

// Component: MyConditions
export default function Medications({ sidebar }) {
  const location = useLocation();
  const medications = useSelector((state) => state.medications.medications);

  const encounterMedications = () => {
    if (location.state?.encounter) {
      const { encounter } = location.state;
      console.log(encounter);
      return medications.filter((medication) => {
        return medication.encounterID === encounter.encounterID;
      });
    } else {
      return medications.filter((medication) => {
        return medication.status === "active";
      });
    }
  };

  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  const medicationDetailsRef = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer sidebar={sidebar} data-testid="currentMedicationsList">
        <div className="mobileVersion">
          {popUp && (
            <MedicationDetails
              popUp={popUp}
              setPopUp={setPopUp}
              medicationDetails={medicationDetailsRef}
            />
          )}
          <PageHeader
            title={"Current Medication"}
            encounter={location.state?.encounter}
            returnRoute={location.state ? "/my-visit-details" : "/dashboard"}
          />
          <div id="iconBg">
            <img id="medicationsIcon" src={medicationIcon} alt="Medications" />
          </div>
          <ListViewContainer>
            <ul className="medicationsList">
              {encounterMedications().length > 0 &&
                encounterMedications().map((medication, index) => (
                  <li
                    id="cardContainer"
                    key={index}
                    onClick={() => {
                      setPopUp(!popUp);
                      medicationDetailsRef.current = medication;
                    }}
                  >
                    <div id="cardLayout">
                      <div id="cardTextContainer">
                        <h2 id="cardHeader">{medication.name}</h2>
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
