// Import: Packages
import React from "react";

// Import: Assets
import genderIcon from "../../../../../assets/img/icons/GenderIcon.svg";
import locationIcon from "../../../../../assets/img/icons/LocationIcon.svg";
import telephoneIcon from "../../../../../assets/img/icons/patientAideTelephoneSVG.svg";
import calendarIcon from "../../../../../assets/img/icons/CalendarIcon.svg";

// Import: dummyData
import { patient } from "../../../../demo-data/dummyPatientData";

// Import: Components
import { GenericCard } from "../../../../components";

// Import: Elements
import { SectionContainer } from "./MyDetails.elements";

// Component: MyDetails
export default function MyDetails({ sidebar }) {
  return (
    <SectionContainer sidebar={sidebar} data-testid="myDetails">
      <GenericCard patientCard={true} title="Smith, Jane">
        <h2>
          Age <span></span>
        </h2>
        <h2>
          Height <span></span>
        </h2>
        <h2>
          Weight <span></span>
        </h2>
      </GenericCard>

      <div className="PatientDetailsContainer">
        <div>
          <img src={genderIcon} alt="Gender Icon" />
          <h3>{patient.gender}</h3>
        </div>
        <div>
          <img src={locationIcon} alt="Location Icon" />
          <h3>{patient.address}</h3>
        </div>
        <div>
          <img src={telephoneIcon} alt="Telephone Icon" />
          <h3>{patient.contactNo}</h3>
        </div>
        <div>
          <img src={calendarIcon} alt="Calendar Icon" />
          <h3>{patient.dOB}</h3>
        </div>
      </div>
    </SectionContainer>
  );
}
