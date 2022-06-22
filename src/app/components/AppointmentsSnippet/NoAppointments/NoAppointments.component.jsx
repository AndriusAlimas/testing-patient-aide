import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate.component";
import {
  NoAppointmentsContainer,
  NoAppointmentText,
} from "./NoAppointments.elements";
import { appointmentsSnippet } from "../../../../assets/constants/constants";

export default function NoAppointments() {
  return (
    <NoAppointmentsContainer data-testid={"NoAppointments"}>
      <CurrentDate />
      <NoAppointmentText>
        {appointmentsSnippet.NO_APPOINTMENTS}
      </NoAppointmentText>
    </NoAppointmentsContainer>
  );
}
