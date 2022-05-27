// Import: Packages
import React from "react";

// Import: Components
import  GenericPopUp  from "../../../components/PopUp/GenericPopUp/GenericPopUp.component";
import GenericCard from "../../../components/Cards/GenericCard/GenericCard.component";
import { MyAppointmentContainer } from "./AppointmentDetails.elements";

export default function AppointmentDetails({ setPopUp, popUp, appointment }) {
  return (
    <MyAppointmentContainer data-testid={"appointmentDetails"}>
      <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
        <GenericCard
          type="appointment-card"
          appointment={appointment}
          bgColor="#fff"
        />
      </GenericPopUp>
    </MyAppointmentContainer>
  );
}
