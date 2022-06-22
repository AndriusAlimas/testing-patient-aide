import React from "react";
import { Link } from "react-router-dom";
import {
  FutureAppointmentsContainer,
  NoAppointmentContainer,
  NoAppointmentText,
} from "./FutureAppointments.elements";
import AppointmentExtract from "../AppointmentExtract/AppointmentExtract.component";
import { getFollowingAppointmentsUniqueDays } from "../utils/appointmentsHelper";
import { appointmentsSnippet } from "../../../../assets/constants/constants";

export default function FutureAppointments({
  sortedFollowingAppointments,
  isAppointmentAvailable,
}) {
  const followingAppointmentsUniqueDays = isAppointmentAvailable
    ? getFollowingAppointmentsUniqueDays(sortedFollowingAppointments)
    : [];
  const theFirstThreeFollowingAppointments = sortedFollowingAppointments.slice(
    0,
    3
  );

  return (
    <>
      <FutureAppointmentsContainer data-testid={"FutureAppointments"}>
        {isAppointmentAvailable &&
        theFirstThreeFollowingAppointments.length > 0 ? (
          theFirstThreeFollowingAppointments.map((futureAppointment, index) => {
            return (
              <div key={futureAppointment.appointmentID}>
                <Link
                  to={"/calendar"}
                  state={{
                    appointment: futureAppointment,
                    appointments: sortedFollowingAppointments,
                  }}
                >
                  <AppointmentExtract
                    isAppointmentAvailable={isAppointmentAvailable}
                    day={followingAppointmentsUniqueDays[index]}
                    appointment={futureAppointment}
                    color="#106493"
                    backgroundColor="#E9F7FE"
                    timeColor="#3a9ace"
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <NoAppointmentContainer>
            <NoAppointmentText>
              {appointmentsSnippet.NO_FUTURE_APPOINTMENTS}
            </NoAppointmentText>
          </NoAppointmentContainer>
        )}
      </FutureAppointmentsContainer>
    </>
  );
}
