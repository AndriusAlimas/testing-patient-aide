import React from "react";
import { Link } from "react-router-dom";
// Import: Elements
import { SectionContainer } from "./MyHealthRecords.elements";

// Import: Components
import { GenericCard, PageHeader } from "../../../components";
import {
  AllergiesIcon,
  ConditionsIcon,
  HealthIcon,
  ProceduresIcon,
} from "../../../../assets/constants/constants";
import account from "../../../../assets/img/icons/account.svg";
import notifications from "../../../../assets/img/icons/notifications.svg";

export default function MyHealthRecords() {
  return (
    <>
      <SectionContainer data-testid="myHealthRecords">
          <PageHeader title={"Health and Wellbeing"} returnRoute={"/my-health"}/>
        <div className="cardsWrapContainer">
          <Link to="/my-allergies">
            <div className="smallCard">
              <GenericCard
                topic="My Allergies"
                action="View"
                icon={<AllergiesIcon />}
                count="3"
                iconColor="#e03a3e"
              />
            </div>
          </Link>
          <Link to="/my-conditions">
            <div className="smallCard">
              <GenericCard
                topic="My Conditions"
                icon={<ConditionsIcon />}
                action="View"
                count="6"
                iconColor="#963d97"
              />
            </div>
          </Link>
          <Link to="/my-procedures">
            <div className="smallCard">
              <GenericCard
                topic="My Procedures"
                icon={<ProceduresIcon />}
                action="View"
                count="1"
                iconColor="#f5821f"
              />
            </div>
          </Link>
          <Link to="/Current-medications">
            <div className="smallCard">
              <GenericCard
                topic="Current Medication"
                icon={<HealthIcon />}
                action="View"
                count="N/A"
                iconColor="#61bb46"
              />
            </div>
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
