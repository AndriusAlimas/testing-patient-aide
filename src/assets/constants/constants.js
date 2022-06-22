// Imports
import { TiTickOutline } from "react-icons/ti";
import { BiMenu, BiLogIn, BiPaperPlane, BiMessageDetail } from "react-icons/bi";
import { ImHome3 } from "react-icons/im";
import { GiHealthPotion } from "react-icons/gi";
import { RiCalendarEventLine } from "react-icons/ri";
import {
  FaHandHoldingMedical,
  FaHandsHelping,
  FaFileMedicalAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  MdAddAlert,
  MdHealthAndSafety,
  MdSave,
  MdCoronavirus,
} from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { SiProcessingfoundation } from "react-icons/si";
// Navbar

export const Dashboard = "Dashboard";

// Icons

export const MyTestResultsIcon = TiTickOutline;
export const HealthIcon = GiHealthPotion;
export const MenuIcon = BiMenu;
export const HomeIcon = ImHome3;
export const CalendarIcon = RiCalendarEventLine;
export const HelpEmergencyIcon = MdAddAlert;
export const HealthTrackerIcon = MdHealthAndSafety;
export const HealthWellbeingIcon = FaHandHoldingMedical;
export const HealthRecordsIcon = MdSave;
export const MyRecordsIcon = BiMessageDetail;
export const AllergiesIcon = MdCoronavirus;
export const ConditionsIcon = FaFileMedicalAlt;
export const ProceduresIcon = SiProcessingfoundation;
export const QuestionnairesIcon = FaQuestionCircle;
export const DocumentationIcon = HiDocumentText;
export const CaresphereIcon = FaHandsHelping;
export const CarePlansIcon = BiPaperPlane;
export const LoginIcon = BiLogIn;

// AllergyDetails
export const allergies = {
  Allergen: "Allergen",
  Severity: "Severity",
  Reaction: "Reaction",
  Category: "Category",
  OnsetDateTime: "On set Date/Time",
  RecordedDateTime: "Recorded Date/Time",
  RecordedBy: "Recorded By",
  PractitionerID: "Practitioner ID",
  AllergyType: "Allergy Type",
  IntoleranceType: "Intolerance Type",
  InformationSource: "Information Source",
  VerificationStatus: "Verification Status",
};

// Conditions
export const conditions = {
  ConditionName: "Condition Name",
  ProblemCode: "Problem Code",
  Category: "Category",
  CreatedAt: "Created At",
  CreatedBy: "Created By",
  ID: "ID",
  Severity: "Severity",
};

// Procedures
export const procedure = {
  ProcedureName: "Procedure Name",
  ProcedureCode: "Procedure Code",
  Status: "Status",
  PerformedDateTime: "Performed Date/Time",
  ID: "ID",
  PerformedBy: "Performed By",
  BodySiteCode: "Body Site Code",
  ProcedureMethod: "Procedure Method",
  ReasonConditions: "Reason Conditions",
};

// Medication
export const medication = {
  name: "Name",
  direction: "Direction",
  startDate: "Start Date",
  duration: "Duration",
  adminMethod: "Admin Method",
  dosage: "Dosage",
  quantity: "Quantity",
  frequency: "Frequency",
  additionalComments: "Additional Comments",
  id: "ID",
  dosageRoute: "Dosage Route",
  reviewPeriod: "Review Period",
  reviewDate: "Review Date",
  instructions: "Instructions",
  status: "Status",
};

// Caresphere Contact Information
export const caresphereContactInfo = {
  ID: "ID",
  active: "Active",
  prefix: "Prefix",
  firstName: "First Name",
  surname: "Last Name",
  telephone: "Telephone",
  address: "Address",
  postcode: "Postcode",
  country: "Country",
};

// Landing page text
export const LANDING_PAGE_TEXT = {
  WELCOME_TO: "Welcome to",
  DISCLAIMER: [
    "PatientAide does not provide medical advice of any kind including advice to take (or not to take) medication. PatientAide must not be relied upon to make decisions about a patient’s medical care. A patient should always seek medical advice from an appropriately qualified healthcare professional.",
    "PatientAide is a tool for a patient and his/her healthcare provider to share information selected by them about the patient’s care. Information from the healthcare provider is a snapshot of information in a patient’s care record with that single provider. Information in PatientAide may not be complete or up to date, does not include information held by a patient’s other healthcare providers and is provided for information only.",
    "Dedalus, as the suppliers of PatientAide, is not responsible for the information in PatientAide or for the provision of, use of, or reliance upon such information by any person.",
  ],
  COPYRIGHT: " 2022 Dedalus. All rights reserved.",
  VERSION_NO: "Version number: 2.1.5",
};

// auth text
export const AUTH = {
  LOGIN: "Login",
  SIGN_UP: "Sign Up",
  SIGN_IN: "Sign In",

  // login page
  LOGIN_FORGOTTEN_PASSWORD: "Forgotten password?",
  LOGIN_RESET_IT: "Reset it",
  LOGIN_NEW_HERE: "New here?",

  // signup page
  REGISTER: "Register",
  ALREADY_HAVE_AN_ACCOUNT: "Already have an account?",

  // reset and forgotten pass
  PASSWORD_RESET: "Password Reset",
  SUBMIT: "Submit",
  REMEMBERED_PASSWORD: "Remembered your password?",

  // sent email
  LINK_PASSWORD_RESET:
    "An email with a password reset link has been sent to your email: ",
  CHECK_EMAIL: "Please check your email",
  PROCEED: "Proceed",
  ACCOUNT_CONFIRMATION: "Account Confirmation",
  LINK_ACCOUNT_CONFIRMATION:
    "An email with your account confirmation link has been sent to your email: ",
  RESET_SUCCESSFULLY: "Your password has been reset successfully",
  MAY_LOGIN: "You may now login!",
};

// Appointment snippet from dashboard
export const appointmentsSnippet = {
  TODAY: "Today",
  NO_TODAY_APPOINTMENTS: "No appointments for today",
  NO_FUTURE_APPOINTMENTS: "No future appointments for you",
  NO_APPOINTMENTS: "There are no appointments for you",
};

// Missing Route
export const MISSING_ROUTE = {
  TITLE: "Oops!",
  MESSAGE: "Page Not Found",
  HOMEPAGE_LINK: "Visit Our Homepage",
};
