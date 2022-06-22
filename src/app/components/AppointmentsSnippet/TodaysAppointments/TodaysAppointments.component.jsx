import React from "react";
import { Link } from "react-router-dom";
import {
  SnippetDate,
  NoAppointmentContainer,
  NoAppointmentText,
  TodaysAppointmentsContainer,
} from "./TodaysAppointments.elements";
import AppointmentExtract from "../AppointmentExtract/AppointmentExtract.component";
import { getSortedTodaysAppointments } from "../utils/appointmentsHelper";
import { appointmentsSnippet } from "../../../../assets/constants/constants";
import { appointments as demoAppointments } from "../../../demo-data/appointments";

export default function TodaysAppointments({
  sortedFollowingAppointments,
  isAppointmentAvailable,
}) {
  const sortedTodayAppointments = getSortedTodaysAppointments(demoAppointments);
  const theFirstTwoTodaysAppointments = sortedTodayAppointments.slice(0, 2);

  return (
    <>
      <TodaysAppointmentsContainer data-testid={"TodaysAppointments"}>
        {theFirstTwoTodaysAppointments.length > 0 && (
          <SnippetDate>{appointmentsSnippet.TODAY}</SnippetDate>
        )}

        {theFirstTwoTodaysAppointments.length > 0 ? (
          theFirstTwoTodaysAppointments.map((todayAppointment) => {
            return (
              <div key={todayAppointment.appointmentID}>
                <Link
                  to={"/calendar"}
                  state={{
                    appointment: todayAppointment,
                    appointments: sortedFollowingAppointments,
                  }}
                >
                  <AppointmentExtract
                    isAppointmentAvailable={isAppointmentAvailable}
                    appointment={todayAppointment}
                    color="#106493"
                    backgroundColor="#E9F7FE"
                    timeColor="#3a9ace"
                    title="Appointment"
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <NoAppointmentContainer>
            <NoAppointmentText>
              {appointmentsSnippet.NO_TODAY_APPOINTMENTS}
            </NoAppointmentText>
          </NoAppointmentContainer>
        )}
      </TodaysAppointmentsContainer>
    </>
  );
}
