// Import: Packages
import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: SectionContainer
export const SectionContainer = styled.section`
  width: 100%;
  height: calc(75vh - 100px);
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;

  .desktopVersion {
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }

  // ************  Agenda View  ***********************
  // main outer agenda container
  .Kalend__Agenda__container {
    background-color: rgb(242, 241, 247);
  }

  //  Appointment Text
  .Kalend__Event__summary__type-agenda {
    padding: 0;
    font-weight: bold;
    font-size: 1rem;
    color: #106493 !important;
  }

  .Kalend__Event__time__type-agenda {
    color: #1890ff !important;
  }

  // appointment type circle shape
  .Kalend__EventAgenda__container div {
    display: none;
  }

  // appointment make appear first then time
  .Kalend__EventAgenda__container {
    flex-direction: column-reverse;
  }

  // ****************** Calendar View *******************
  // dates cells
  .Kalend__CalendarHeaderDates__col {
    height: 3rem;
  }
  // day view header
  .Kalend__CalendarHeaderCol {
    padding-bottom: 0;
  }
  .Kalend__CalendarHeader-tall-day {
    padding-right: 2rem;
  }

  .Kalend__CalendarHeaderCol {
    width: 100% !important;
  }

  // hours text
  .Kalend__CalendarBodyHours__text {
    font-size: 0.8rem;
  }
  .Kalend__Calendar__root {
    margin-top: 5rem;
    font-family: var(--main-font);
    background-color: white;
    border-radius: 0.6rem;
  }

  .Kalend__button {
    width: 100%;
    z-index: 1;
  }

  .Kalend__button .Kalend__Event-month .Kalend__ButtonBase {
  }
  .Kalend__button .Kalend__Event-normal .Kalend__ButtonBase {
    width: 100% !important;
  }
  .Kalend__AgendaDayRow__events {
    background-color: #e9f7fe;
    border-left: 4px solid #1890ff;
    border-radius: 3px;
    margin-bottom: 0.8rem;
    width: 90%;
  }
  .Kalend__AgendaDayRow__container {
    border-bottom: none;
    padding: 0;
  }
  .Kalend__Event__time__type-agenda,
  .Kalend__Event__time__type-agenda-dark {
    margin-right: 1rem;
    padding: 0;
  }
  .Kalend__main * {
    font-family: var(--main-font);
  }
  .Kalend__CurrentHourLine {
    z-index: 5;
  }

  .Kalend__CalendarHeaderDates__col {
    width: 100%;
  }
  .Kalend__MonthWeekRow__container {
    button {
      top: 0.5rem !important;
      width: 3rem !important;
    }
  }

  .Kalend__text-dark {
    top: 5rem;
  }
  button {
    width: 100% !important;
  }

  /* button g[data-name="calendar"] {
    display: none;
  } */
  .Kalend__CalendarDesktopNavigation__buttons {
    .Kalend__ButtonIcon__container:nth-child(3) {
      display: none;
    }
  }
`;
