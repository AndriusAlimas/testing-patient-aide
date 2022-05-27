import { convertDate } from "./dateHelper";
const createFile = (data) => {
  let icsFile = null;
  var link = document.querySelector("#downloadLink");
  // console.log(link);
  let eventDate = {
    start: data.start,
    end: data.end,
    summary: data.appointmentID,
    location: data.locationName,
    description: data.sessionName,
    dr_name: data.practitionerName,
  };
  console.log(eventDate);
  link.href = makeICSFile(
    eventDate,
    eventDate.summary,
    eventDate.description,
    icsFile
  );
};

const makeICSFile = (date, summary, description, icsFile) => {
  console.log(convertDate(date.start, "-", false, 0));
  let test =
    "BEGIN:VCALENDAR\n" +
    "CALSCALE:GREGORIAN\n" +
    "METHOD:PUBLISH\n" +
    "PRODID:-//Test Cal//EN\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    "UID:test-1\n" +
    "DTSTART;VALUE=DATE:" +
    convertDate(date.start, "-", false, 0) +
    "\n" +
    "DTEND;VALUE=DATE:" +
    convertDate(date.end, "-", false, 0) +
    "\n" +
    "SUMMARY:" +
    summary +
    "\n" +
    "DESCRIPTION:" +
    description +
    "\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";
  console.log(test);
  let data = new File([test], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (icsFile !== null) {
    window.URL.revokeObjectURL(icsFile);
    console.log(icsFile);
  }
  console.log(data);
  return window.URL.createObjectURL(data);
};

export { createFile, makeICSFile };
