// Import: Packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Import: Assets
import DownloadIcon from "../../../../assets/img/icons/download_calendar.svg";

// Import Utils
import ICalendarLink from "react-icalendar-link";

// Import: Elements
import { GenericCardContainer } from "./GenericCard.elements";
import { convertDate } from "../../../utils/dateHelper";
import Select, {
  OptionType,
  InputValueType,
  StyleConfigType,
} from "react-auto-scroll-time-select";
// Component: GenericCard
export default function GenericCard({
  action,
  icon,
  topic,
  count,
  title,
  conditionCard,
  emergencyCardProfileColor,
  emergencyContact,
  questionnaireCard,
  patientCard,
  children,
  iconColor,
  document,
  download,
  infoDisplay,
  bgColor,
  appointment,
}) {
  const event = {
    title: appointment.summary,
    description: "My Description",
    startTime: appointment.startAt,
    endTime: appointment.endAt,
    location: appointment.sessionName,
    attendees: ["Hello World <hello@world.com>", "Hey <hey@test.com>"],
  };

  const [option, setOption] = useState({
    label: "Hours:Minutes",
    value: "HH:MM",
  });
  let hours = option.value.split(":")[0];
  let minutes = option.value.split(":")[1];
  if (hours === "HH" || minutes === "MM") {
    hours = "00";
    minutes = "00";
  }
  const rawContent = `BEGIN:VALARM\nACTION:DISPLAY\nDESCRIPTION:Appointment\nTRIGGER:-PT${hours}H${minutes}M\nEND:VALARM`;
  useEffect(() => {
    console.log(option.value.split(":"));
  }, [option]);

  return (
    <GenericCardContainer
      action={action}
      topic={topic}
      icon={icon}
      count={count}
      emergencyCardProfileColor={emergencyCardProfileColor}
      conditionCard={conditionCard}
      emergencyContact={emergencyContact}
      document={document}
      download={download}
      iconColor={iconColor}
      infoDisplay={infoDisplay}
      patientCard={patientCard}
      questionnaireCard={questionnaireCard}
      data-testid={"genericCard"}
      bgColor={bgColor}
      appointment={appointment}>
      {title && <h1>{title}</h1>}
      {children && <div>{children}</div>}
      {/* Add Download Icon */}
      {download && (
        <div className="download">
          <img src={DownloadIcon} alt="Download Icon" />
          <h3>Download</h3>
        </div>
      )}
      {infoDisplay && <div className="infoDisplay">{infoDisplay}</div>}
      {topic && (
        <div className="topicDate">
          <p className="topic" style={{ color: iconColor }}>
            <i>{icon}</i>
            {topic}
          </p>
          <p className="action">{action} &nbsp; ᐳ</p>
        </div>
      )}
      {count && (
        <div className="resultMeasure">
          <h3 className="count">{count}</h3>
        </div>
      )}
      {appointment && (
        <>
          <div
            style={{
              borderLeft: "0.3rem solid white",
              paddingLeft: "0.5rem",
            }}>
            <time className="time">
              {convertDate(appointment.startAt, " ", true, 1).split(":00.")[0]}
            </time>
            <span className="p-3 appointment-header">
              Full Blood Count (FBC)
            </span>
            <hr></hr>

            <div className="w-100 d-flex flex-column  light-text">
              <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Clinic:</span>{" "}
                {appointment.sessionName}
              </div>
              {/* <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Booking type:</span>{" "}
                {appointment.appointmentType}
              </div> */}
              <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Priority:</span>{" "}
                {appointment.appointmentType}
              </div>
              <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Location:</span>{" "}
                {appointment.locationName}
              </div>
              <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Summary:</span>{" "}
                {appointment.summary}
              </div>
              <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">Practitioner Name:</span>{" "}
                {appointment.practitionerName}
              </div>
              {/* <div className="w-100 m-2 d-flex justify-content-between">
                <span className="title-text">ID:</span>{" "}
                {appointment.appointmentID}
              </div> */}
              <hr></hr>
              <strong className="title-text text-center ">
                Set Appointment Reminder:
              </strong>
              <div className="w-100 m-2 d-flex align-items-center ">
                <Select
                  span={5}
                  hourLimit={100}
                  isClearable={false}
                  onChange={setOption}
                  value={option}
                  styles={{
                    control: (config) => ({
                      ...config,
                      maxWidth: "8rem",
                    }),
                    inputForm: (config) => ({
                      ...config,
                      width: "5rem",
                      backgroundColor: "#fff",
                      border: "1px solid #E0623F",
                    }),
                    dropDownArrowWrapper: (config) => ({
                      ...config,
                      display: "none",
                      backgroundColor: "#248cfc",
                      "&:hover > div": {
                        borderColor:
                          "rgba(0, 0, 0, 0.5) transparent transparent",
                      },
                    }),
                    dropDownArrowItem: (config) => ({
                      ...config,
                      borderColor: "#E0623F transparent transparent",
                    }),
                    selectOptions: (config) => ({
                      ...config,
                      width: "7rem",
                      height: "4.5rem",
                      backgroundColor: "#248cfc",
                    }),
                    optionMenu: (config) => ({
                      ...config,
                      color: "black",
                    }),
                  }}
                />
                <span className="title-text p-2">before my appointment</span>
              </div>
            </div>
          </div>

          <ICalendarLink event={event} rawContent={rawContent}>
            <div className="download-ics d-flex   align-items-center justify-content-center">
              <img src={DownloadIcon} alt="Download Icon" />

              <h3>Add To Calendar </h3>
            </div>
          </ICalendarLink>
        </>
      )}
    </GenericCardContainer>
  );
}

GenericCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
