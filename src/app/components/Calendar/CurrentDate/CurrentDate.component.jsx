import React from "react";
import { CurrentDateContainer } from "./CurrentDate.elements";

export default function CurrentDate({day, date}) {
  return (
    <CurrentDateContainer>
        <h2 id="day">{day}</h2>
        <h2 id="date">{date}</h2>
    </CurrentDateContainer>
  );
}
