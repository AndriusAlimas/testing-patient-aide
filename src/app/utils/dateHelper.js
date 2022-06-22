const convertDate = (date, joiner, reverse, time) => {
  let event = new Date(date).toISOString();
  event = event.split("T")[time];
  if (reverse) {
    event = event.split("-").reverse();
  } else {
    event = event.split("-");
  }
  event = event.join(joiner);
  return event;
};

const getFullDayName = (date) => {
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayName[date.getDay()];
};

const getUtcUkFormatHour = (date) => {
  return new Date(date).toLocaleTimeString("en-GB", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export { convertDate, getFullDayName, getUtcUkFormatHour };
