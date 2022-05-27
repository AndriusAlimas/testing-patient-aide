// Import: Dependencies
import React, { useState, useEffect } from "react";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// Import Element: SectionContainer
import { SectionContainer } from "./Calendar.elements";
import { PageHeader } from "../../components";
import AppointmentDetails from "./AppointmentsDetails/AppointmentDetails.component";
// Import: Local Data
import { appointments as demoAppointments } from "../../demo-data/appointments";
let appointments = [];
//Component: Calendar
export default function Calendar({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const [appointment, setAppointment] = useState({});
  const [showAgenda, setShowAgenda] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setPopUp(true);
      setAppointment(location.state.appointment);
    }
  }, [location.state]);

  // Receiving sorted appointments from dashboard calendar or from navbar menu
  if (location.state !== null && location.state.appointments !== null) {
    appointments = location.state.appointments;
    appointments = appointments.filter((appointment) => {
      return new Date(appointment.startAt).getTime() > new Date().getTime();
    });
  } else {
    demoAppointments.sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
    appointments = demoAppointments.filter((appointment) => {
      return new Date(appointment.startAt).getTime() > new Date().getTime();
    });
  }

  // When page view change check if range days on screen  is less than month or weekly
  const onPageChange = (OnPageChangeData) => {
    new Date(OnPageChangeData.rangeTo).getTime() -
      new Date(OnPageChangeData.rangeFrom).getTime() <
    600799059
      ? setShowAgenda(false)
      : setShowAgenda(true);
  };

  // when you click on appointment go set that appointment and make pop up
  const onEventClick = (e) => {
    setPopUp(true);
    setAppointment(e);
  };

  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}>
      <SectionContainer sidebar={sidebar} className="Calender">
        {/* Top Calendar  */}
        <Kalend
          timezone={"UTC"}
          onEventClick={onEventClick}
          events={appointments}
          initialView={CalendarView.MONTH}
          disabledViews={[CalendarView.AGENDA]}
          onPageChange={onPageChange}
          showTimeLine={true}
          autoScroll={true}
          disabledDragging={true}
        />
      </SectionContainer>

      <SectionContainer sidebar={sidebar}>
        <PageHeader title="Calendar" returnRoute={"/"} id="Calender-Agenda" />
        {/* Bottom Calendar Agenda */}
        {showAgenda && (
          <Kalend
            timezone={"UTC"}
            onEventClick={onEventClick}
            events={appointments}
            initialView={CalendarView.AGENDA}
            disabledViews={[
              CalendarView.THREE_DAYS,
              CalendarView.WEEK,
              CalendarView.DAY,
            ]}
          />
        )}
        {popUp && (
          <AppointmentDetails
            popUp={popUp}
            setPopUp={setPopUp}
            appointment={appointment}
          />
        )}
      </SectionContainer>
    </motion.div>
  );
}
