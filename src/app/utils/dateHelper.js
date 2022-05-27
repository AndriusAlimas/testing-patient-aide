const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthShortNamesArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// time for date pass 0 for time pass 1
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

// get  total days in this years month
const lastDayInMonth = (month, year) => new Date(year, month, 0).getDate();

const isWeekend = (day) => {
  // 6 when it's saturday and 0 when it's sunday
  return day % 7 === 6 || day % 7 === 0;
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

const compareMonth = (date) => {
  return (
    date.getMonth() === new Date().getMonth() &&
    date.getFullYear() === new Date().getFullYear()
  );
};

const getMonday = (date) => {
  date = new Date(date);
  let day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
};

const getDayDifference = ({startAt} , date) => {
 
  let dayNumber = new Date(startAt).getDate();
  let diffDays = dayNumber - date.getDate();
  let dayString = "";
  if (diffDays === 0 && compareMonth(new Date(startAt))) {
    dayString = "Today";
  } else if (diffDays === 1 && compareMonth(new Date(startAt))) {
    dayString = "Tomorrow";
  } else {
    var options = {
      weekday: "long",

      month: "long",
      day: "numeric",
    };
    dayString = new Date(startAt).toLocaleString("en-GB", options).split(",");
  }
  return dayString;
};
export {
  convertDate,
  lastDayInMonth,
  isWeekend,
  dayNames,
  getFullDayName,
  monthShortNamesArray,
  compareMonth,
  getMonday,
  getDayDifference,
};
