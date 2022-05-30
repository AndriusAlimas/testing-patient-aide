// Import: packages
import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../../../components/PageHeader/PageHeader.component";
import moment from "moment";

// Import: elements
import { VisitDetailsContainer } from "./MyVisitDetails.elements";

// import: assets
import questionnaireIcon from "../../../../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg";
import medicationIcon from "../../../../../assets/img/icons/dashboardMedicationIcon.svg";
import MyVisitDetailsCard from "./MyVisitDetailsCard/MyVisitDetailsCard";

// Component: MyVisitDetails
export default function MyVisitDetails() {
  const location = useLocation();

  const {
    state: { encounter },
  } = location;

  return (
    <VisitDetailsContainer>
      <div id="mobileVersion">
        <PageHeader
          encounter={encounter}
          title="Visit Details"
          returnRoute={"/my-visits"}
        />
        <div id="header">
          <h2 id="visitTitle">{encounter.class}</h2>
          <p>
            {moment(encounter.encounterStartDate).format("MM/DD/YYYY MM:HHa")}
          </p>
        </div>
        <MyVisitDetailsCard
          title="Questionnaires"
          icon={questionnaireIcon}
          description="Submit and Review questionnaires for this visit."
          linkTo="/my-questionnaires"
          encounter={encounter}
          bgColor1="#FDA352"
          bgColor2="#F16702"
        />
        <MyVisitDetailsCard
          title="Medications"
          icon={medicationIcon}
          description="View any medication prescribed during this visit"
          linkTo="/Current-medications"
          encounter={encounter}
          bgColor1="#5e60ce"
          bgColor2="#6930c3"
        />
      </div>
    </VisitDetailsContainer>
  );
}
