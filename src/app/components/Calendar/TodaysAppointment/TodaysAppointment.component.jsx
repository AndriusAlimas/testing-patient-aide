import React from "react";
import { TodaysAppointmentContainer } from "./TodaysAppointment.elements";
import FutureAppointment from "../FutureAppointment/FutureAppointment.component";

export default function TodaysAppointment({
  appointment,
  color,
  backgroundColor,
  timeColor,
  day,
  title,
  time,
}) {
  return (
    <TodaysAppointmentContainer>
      {appointment && (
        <FutureAppointment
          appointment={true}
          color={color}
          backgroundColor={backgroundColor}
          timeColor={timeColor}
          day={day}
          title={title}
          time={time}
        />
      )}
      {!appointment && <h2 id="noAppointment">No events today</h2>}
    </TodaysAppointmentContainer>
  );
}
