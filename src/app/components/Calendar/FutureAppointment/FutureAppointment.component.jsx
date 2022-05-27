import React from "react";
import { FutureAppointmentContainer } from "./FutureAppointment.elements";

export default function FutureAppointment({
  appointment,
  day,
  title,
  time,
  color,
  backgroundColor,
  timeColor,
}) {
  return (
    <FutureAppointmentContainer
      color={color}
      backgroundColor={backgroundColor}
      timeColor={timeColor}
      // onClick={()=>{window.alert(appointment)}}
    >
      {appointment && (
        <>
          <h2 id="appointmentDate">{day}</h2>
          <div id="futureAppointmentInfoContainer">
            <div id="leftBorder"></div>
            <div id="appointmentNameAndTimeContainer">
              <h3 id="appointmentName">{title}</h3>
              <h3 id="appointmentTime">{time}</h3>
            </div>
          </div>
        </>
      )}
    </FutureAppointmentContainer>
  );
}
