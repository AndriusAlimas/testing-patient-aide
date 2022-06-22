import React from "react";
import { AppointmentExtractContainer } from "./AppointmentExtract.elements";
import { getUtcUkFormatHour } from "../../../utils/dateHelper";

export default function AppointmentExtract({
  isAppointmentAvailable,
  day,
  appointment,
  color,
  backgroundColor,
  timeColor,
}) {
  const time = isAppointmentAvailable
    ? `${getUtcUkFormatHour(appointment.startAt)} - ${getUtcUkFormatHour(
        appointment.endAt
      )}`
    : "";

  return (
    <AppointmentExtractContainer
      data-testid={"AppointmentExtract"}
      color={color}
      backgroundColor={backgroundColor}
      timeColor={timeColor}
    >
      <>
        {day && <h2 id="appointmentDate">{day}</h2>}
        <div id="futureAppointmentInfoContainer">
          <div id="leftBorder"></div>
          <div id="appointmentNameAndTimeContainer">
            {isAppointmentAvailable && (
              <h3 id="appointmentName">{appointment.summary}</h3>
            )}
            <h3 id="appointmentTime">{time}</h3>
          </div>
        </div>
      </>
    </AppointmentExtractContainer>
  );
}
