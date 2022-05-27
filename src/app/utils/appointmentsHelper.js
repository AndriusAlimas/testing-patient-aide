const filterAppointmentsByYearMonthShort = (appointments, year, month) => {
  return appointments.filter(
    ({ startAt }) =>
      new Date(startAt).toString().indexOf(year) >= 0 &&
      new Date(startAt).toString().indexOf(month) >= 0
  );
};

const filterAppointmentsByYearMonth = (appointments, year, month) => {
  
 
  return appointments.filter(
    ({ startAt }) =>
      new Date(startAt).getFullYear() === year &&
      new Date(startAt).getMonth() === month
    
  );
};

const filteringAppointmentsDay = (appointments, day) => {
  return appointments.filter(({ startAt }) => {
    return new Date(startAt).getDate() === day;
  });
};

export {
  filterAppointmentsByYearMonthShort,
  filteringAppointmentsDay,
  filterAppointmentsByYearMonth,
};
