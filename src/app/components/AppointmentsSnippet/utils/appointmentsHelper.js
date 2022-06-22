const getSortedTodaysAppointments = (appointments) => {
  if (!Array.isArray(appointments) || appointments.length === 0) return [];
  const currentDate = new Date();
  const unsortedTodayAppointments = appointments.filter(({ startAt }) => {
    return new Date(startAt).getDate() === currentDate.getDate();
  });
  return sortAppointments(unsortedTodayAppointments);
};

const getSortedFollowingAppointments = (appointments) => {
  if (!Array.isArray(appointments) || appointments.length === 0) return [];
  const currentDate = new Date();
  const unsortedAppointments = appointments.filter((appointment) => {
    return new Date(appointment.startAt).getDate() > currentDate.getDate();
  });
  return sortAppointments(unsortedAppointments);
};

const getFollowingAppointmentsUniqueDays = (appointments) => {
  if (!Array.isArray(appointments) || appointments.length === 0) return [];
  const sortedAppointments = sortAppointments(appointments);

  const currentDate = new Date();
  let dayString = "";
  const uniqueDays = [];

  sortedAppointments.map((appointment) => {
    const dayNumber = new Date(appointment.startAt).getDate();
    const diffDays = dayNumber - currentDate.getDate();

    if (diffDays === 1 && compareMonth(new Date(appointment.startAt))) {
      dayString = "Tomorrow";
      uniqueDays.includes(dayString)
        ? uniqueDays.push("")
        : uniqueDays.push(dayString);
    } else {
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      dayString = new Date(appointment.startAt).toLocaleString(
        "en-GB",
        options
      );
      uniqueDays.includes(dayString)
        ? uniqueDays.push("")
        : uniqueDays.push(dayString);
    }
  });
  return uniqueDays;
};

const compareMonth = (date) => {
  return (
    date.getMonth() === new Date().getMonth() &&
    date.getFullYear() === new Date().getFullYear()
  );
};

const sortAppointments = (appointments) => {
  return appointments.sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
};

export {
  getSortedTodaysAppointments,
  getSortedFollowingAppointments,
  getFollowingAppointmentsUniqueDays,
};
