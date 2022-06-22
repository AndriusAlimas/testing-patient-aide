import React from "react";
import {
  CurrentDateContainer,
  DayContainer,
  DateContainer,
} from "./CurrentDate.elements";
import { getFullDayName } from "../../../utils/dateHelper";

export default function CurrentDate() {
  const currentDate = new Date();
  const fullDayName = getFullDayName(currentDate);
  const date = currentDate.getDate();

  return (
    <CurrentDateContainer data-testid={"CurrentDate"}>
      <DayContainer>{fullDayName}</DayContainer>
      <DateContainer>{date}</DateContainer>
    </CurrentDateContainer>
  );
}
