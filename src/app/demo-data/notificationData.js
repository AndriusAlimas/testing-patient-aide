// Import: assets
import questionnaireIcon from "../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg" 
import careSphereIcon from "../../assets/img/icons/careContactsIcon.svg"
import document from "../../assets/img/icons/Dashboard/dashboardDocumentsIcon.svg";


export const notifications = [
  {
    type: "Questionnaire",
    linkTo: "/my-questionnaires",
    message: "Please complete questionnaire",
    icon: questionnaireIcon
  },
  {
    type: "Caresphere Update",
    linkTo: "/caresphere",
    message: "Add next of kin",
    icon: careSphereIcon
  },
  {
    type: "Caresphere Update",
    linkTo: "/caresphere",
    message: "Add next of kin",
    icon: careSphereIcon
  },
  {
    type: "Document",
    linkTo: "/my-documentation",
    message: "New Document ready to view",
    icon: document
  },
];
