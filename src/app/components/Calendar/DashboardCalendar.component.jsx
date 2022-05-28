import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrentDate from "./CurrentDate/CurrentDate.component";
import { DashboardCalendarContainer } from "./DashboardCalendar.elements";
import FutureAppointment from "./FutureAppointment/FutureAppointment.component";
import TodaysAppointment from "./TodaysAppointment/TodaysAppointment.component";
import {
  getFullDayName,
  convertDate,
  getDayDifference,
} from "../../utils/dateHelper";
import {
  filterAppointmentsByYearMonth,
  filteringAppointmentsDay,
} from "../../utils/appointmentsHelper";
import { appointments as demoAppointments } from "../../demo-data/appointments";
let appointments = [];
export default function DashboardCalendar({ todayDate }) {
  // Local variables
  let futureAppointments = new Set();
  let appointmentTime = "";
  let futureAppointmentsTime = [];
  let firstFutureAppointment = {};
  let secondFutureAppointment = {};

  const currentMonthAppointments = filterAppointmentsByYearMonth(
    demoAppointments,
    todayDate.getFullYear(),
    todayDate.getMonth()
  );

  let todayAppointment = filteringAppointmentsDay(
    currentMonthAppointments,
    todayDate.getDate()
  )[0];

  // check if today appointment time is past already
  if (
    todayAppointment &&
    new Date(todayAppointment.endAt).getTime() < new Date().getTime()
  )
    todayAppointment = undefined;

  appointments = demoAppointments.filter((appointment) => {
    return new Date(appointment.endAt) >= new Date();
  });
  // sort all appointments start property in ascending order from early to late
  appointments.sort((a, b) => new Date(a.startAt) - new Date(b.startAt));

  // FUNCTION get appointments time depending on second argument which it tell if we had today appointment in place
  const populateAppointmentsTime = (appointments, today) => {
    // if we only have one appointment
    if (appointments.length <= 2 && !today) {
      for (let i = 0; i < appointments.length; i++) {
        futureAppointments.add(appointments[i]);
        futureAppointmentsTime.push(
          convertDate(appointments[i].startAt, " ", true, 1).split(":00.")[i] +
            "-" +
            convertDate(appointments[0].endAt, " ", true, 1).split(":00.")[0]
        );
      }
    } else {
      for (let i = 1; i < appointments.length; i++) {
        if (
          new Date(appointments[0].endAt).getTime() <
          new Date(appointments[i].endAt).getTime()
        ) {
          futureAppointments.add(appointments[i]);

          futureAppointmentsTime.push(
            convertDate(appointments[i].startAt, " ", true, 1).split(
              ":00."
            )[0] +
              "-" +
              convertDate(appointments[i].endAt, " ", true, 1).split(":00.")[0]
          );
        }
        // we only need 2 future appointment times
        if (futureAppointments.size === 2) break;
      }
    }

    if (today) {
      appointmentTime =
        convertDate(todayAppointment.startAt, " ", true, 1).split(":00.")[0] +
        "-" +
        convertDate(todayAppointment.endAt, " ", true, 1).split(":00.")[0];
      // we don't want see in future appointments today appointment time

      if (futureAppointments.has(todayAppointment.startAt)) {
        futureAppointments.delete(todayAppointment.startAt);
      }
    }
  };

  // populate future appointments time if you have today appointment time don't include in future appointments time
  if (todayAppointment !== undefined) {
    populateAppointmentsTime(appointments, true);
  } else {
    populateAppointmentsTime(appointments, false);
  }

  // Get first and second future appointments from set
  [firstFutureAppointment] = futureAppointments;
  [, secondFutureAppointment] = futureAppointments;

  return (
    <>
      {futureAppointments.size > 0 || todayAppointment !== undefined ? (
        <DashboardCalendarContainer>
          <div id="currentDateContainer">
            <CurrentDate
              day={getFullDayName(todayDate)}
              date={todayDate.getDate()}
            />

            <Link
              to={todayAppointment ? "/calendar" : ""}
              state={{
                appointment: todayAppointment,
                appointments: appointments,
              }}>
              <TodaysAppointment
                appointment={todayAppointment}
                color="#106493"
                backgroundColor="#E9F7FE"
                timeColor="#3a9ace"
                day="Today"
                title="Appointment"
                time={appointmentTime}
              />
            </Link>
          </div>

          <div id="futureDatesContainer">
            {firstFutureAppointment && (
              <Link
                to="/calendar"
                state={{
                  appointment: firstFutureAppointment,
                  appointments: [...futureAppointments],
                }}>
                <FutureAppointment
                  appointment={firstFutureAppointment}
                  color="#106493"
                  backgroundColor="#E9F7FE"
                  timeColor="#3a9ace"
                  day={getDayDifference(firstFutureAppointment, todayDate)}
                  title="Appointment"
                  time={futureAppointmentsTime[0]}
                />
              </Link>
            )}
            {secondFutureAppointment && (
              <Link
                to="/calendar"
                state={{
                  appointment: secondFutureAppointment,
                  appointments: [...futureAppointments],
                }}>
                <FutureAppointment
                  appointment={secondFutureAppointment}
                  day={getDayDifference(secondFutureAppointment, todayDate)}
                  color="#106493"
                  backgroundColor="#E9F7FE"
                  timeColor="#3a9ace"
                  title="Appointment"
                  // color={"#7B4588"}
                  // timeColor="#CC73E1"
                  time={futureAppointmentsTime[1]}
                />
              </Link>
            )}
          </div>
        </DashboardCalendarContainer>
      ) : (
        <DashboardCalendarContainer>
          <div id="currentDateContainer">
            <CurrentDate
              day={getFullDayName(todayDate)}
              date={todayDate.getDate()}
            />
          </div>
          <div id="noAppointmentsContainer">
            <h2 id="noAppointments">No Upcoming Appointments</h2>
          </div>
        </DashboardCalendarContainer>
      )}

      {/* {todayAppointment === undefined && futureAppointments.size === 0 && (
        <DashboardCalendarContainer>
          <div id="currentDateContainer">
            <CurrentDate
              day={getFullDayName(todayDate)}
              date={todayDate.getDate()}
            />
          </div>
          <div id="noAppointmentsContainer">
            <h2 id="noAppointments">No Upcoming Appointments</h2>
          </div>
        </DashboardCalendarContainer>
      )} */}
      {/* {console.log(todayAppointment)}
      {todayAppointment === undefined && futureAppointments.size === 0 && (
        <DashboardCalendarContainer>
          <div id="currentDateContainer">
            <CurrentDate
              day={getFullDayName(todayDate)}
              date={todayDate.getDate()}
            />
          </div>
          <div id="noAppointmentsContainer">
            <h2 id="noAppointments">No Upcoming Appointments</h2>
          </div>
        </DashboardCalendarContainer>
      )} */}
    </>
  );
}
