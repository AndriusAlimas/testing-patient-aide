import React from "react";
import DashboardYourFilesCards from "../../../components/Cards/DashboardCards/DashboardYourFilesCards/DashboardYourFilesCards.component";
import { YourFilesContainer } from "./YourFiles.elements";
import { GetAllDocuments } from "../../../../redux/slices/DocumentsSlice";

// Import: Assets
import questionnaireIcon from "../../../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg";
import documentsIcon from "../../../../assets/img/icons/Dashboard/dashboardDocumentsIcon.svg";
import testResultsIcon from "../../../../assets/img/icons/Dashboard/dashboardTestResultsIcon.svg";

export default function YourFiles() {

  return (
    <YourFilesContainer>
      <h2 id="headerTitle">Your Files</h2>
      <DashboardYourFilesCards
        title="Questionnaires"
        description="Submit & review Medical Questionnaires."
        icon={questionnaireIcon}
        bgColor1="#FDA352"
        bgColor2="#F16702"
        route="/my-questionnaires"
      />
      <DashboardYourFilesCards
        title="Documents"
        description="Explore and download files related to you."
        icon={documentsIcon}
        bgColor1="#00B3B8"
        bgColor2="#01777A"
        route="/my-documentation"
      />
      <DashboardYourFilesCards
        title="Test Results"
        description="View your uploaded test results."
        icon={testResultsIcon}
        bgColor1="#3078BA"
        bgColor2="#002851"
        route="/my-test-results"
      />
    </YourFilesContainer>
  );
}
