import {
  getSortedTodaysAppointments,
  getSortedFollowingAppointments,
  getFollowingAppointmentsUniqueDays,
} from "./appointmentsHelper";
import {
  testData,
  todaysExpectedResult,
  followingExpectedResult,
} from "./testData";

describe("getSortedTodaysAppointments", () => {
  it("return an empty array if the input is not an array", () => {
    const testData = [null, undefined, NaN, 0, 1, 45, "", "1", "77"];
    testData.map((input) =>
      expect(getSortedTodaysAppointments(input)).toEqual([])
    );
  });
  it("return an empty array if the input is an empty array or objet", () => {
    const testData = [[], {}];
    testData.map((input) =>
      expect(getSortedTodaysAppointments(input)).toEqual([])
    );
  });
  it("return an array of today's appointment objects sorted, most recent first", () => {
    expect(getSortedTodaysAppointments(testData)).toEqual(todaysExpectedResult);
  });
});

describe("getSortedFollowingAppointments", () => {
  it("return an empty array if the input is not an array", () => {
    const testData = [null, undefined, NaN, 0, 1, 45, "", "1", "77"];
    testData.map((input) =>
      expect(getSortedFollowingAppointments(input)).toEqual([])
    );
  });
  it("return an empty array if the input is an empty array or objet", () => {
    const testData = [[], {}];
    testData.map((input) =>
      expect(getSortedFollowingAppointments(input)).toEqual([])
    );
  });
  it("return an array of all appointment without the todays ones, sorted, most recent first", () => {
    expect(getSortedFollowingAppointments(testData)).toEqual(
      followingExpectedResult
    );
  });
});

describe("getFollowingAppointmentsUniqueDays", () => {
  it("return an empty array if the input is not an array", () => {
    const testData = [null, undefined, NaN, 0, 1, 45, "", "1", "77"];
    testData.map((input) =>
      expect(getFollowingAppointmentsUniqueDays(input)).toEqual([])
    );
  });
  it("return an empty array if the input is an empty array or objet", () => {
    const testData = [[], {}];
    testData.map((input) =>
      expect(getFollowingAppointmentsUniqueDays(input)).toEqual([])
    );
  });
  it("return an array of unique days; if the day is duplicate, will return an empty string", () => {
    const date = new Date().toISOString();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const dayString = new Date(date).toLocaleString("en-GB", options);

    const expectedResult = [
      dayString,
      "",
      "Tomorrow",
      "",
      "Tuesday, 21 June",
      "Friday, 21 October",
      "Wednesday, 21 December",
    ];
    expect(getFollowingAppointmentsUniqueDays(testData)).toEqual(
      expectedResult
    );
  });
});
