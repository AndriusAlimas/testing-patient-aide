import React from "react";
import CurrentDate from "./CurrentDate/CurrentDate.component";
import {
  AppointmentsSnippetContainer,
  LeftView,
} from "./AppointmentsSnippet.elements";
import TodaysAppointments from "./TodaysAppointments/TodaysAppointments.component";
import FutureAppointments from "./FutureAppointments/FutureAppointments.component";
import NoAppointments from "./NoAppointments/NoAppointments.component";
import { getSortedFollowingAppointments } from "./utils/appointmentsHelper";
import { appointments as demoAppointments } from "../../demo-data/appointments";

export default function AppointmentsSnippet() {
  const isAppointmentAvailable =
    !Array.isArray(demoAppointments) || demoAppointments.length > 0;

  const sortedFollowingAppointments =
    isAppointmentAvailable && getSortedFollowingAppointments(demoAppointments);

  return (
    <>
      {demoAppointments.length === 0 ? (
        <NoAppointments />
      ) : (
        <>
          <AppointmentsSnippetContainer data-testid={"AppointmentsSnippet"}>
            <LeftView>
              <CurrentDate />
              <TodaysAppointments
                sortedFollowingAppointments={sortedFollowingAppointments}
                isAppointmentAvailable={isAppointmentAvailable}
              />
            </LeftView>
            <FutureAppointments
              sortedFollowingAppointments={sortedFollowingAppointments}
              isAppointmentAvailable={isAppointmentAvailable}
            />
          </AppointmentsSnippetContainer>
        </>
      )}
    </>
  );
}
