import { checkAppointments } from "./utils";

// test if can handle other values than arrays
test("test if can handle other values than arrays", () => {
  expect(checkAppointments(NaN, [])).toEqual([]);
  expect(checkAppointments([], NaN)).toEqual([]);
  expect(checkAppointments(undefined, NaN)).toEqual([]);
});

test("test if returning 5", () => {
  const appointments = [
    { appointmentID: 1 },
    { appointmentID: 2 },
    { appointmentID: 3 },
    { appointmentID: 4 },
    { appointmentID: 5 },
  ];
  expect(checkAppointments(appointments, [1, 2, 3, 4])).toEqual([
    { appointmentID: 5 },
  ]);
});

test("test equal returns []", () => {
  const appointments = [
    { appointmentID: 1 },
    { appointmentID: 2 },
    { appointmentID: 3 },
    { appointmentID: 4 },
    { appointmentID: 5 },
  ];
  expect(checkAppointments(appointments, [1, 2, 3, 4, 5])).toEqual([]);
});
