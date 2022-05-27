// Import: Packages
import styled from "styled-components/macro";
import {
  deviceMaxWidth,
  deviceMinWidth,
} from "../../../definitions/breakPoints";

// Element: SectionContainer
export const SectionContainer = styled.section`
  width: 100vw;
  transition: all 0.5s ease;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  background-color: var(--background-color);
  position: relative;
  overflow: ${(props) => (props.patientModal ? "hidden" : "auto")};

  .desktopVersion {
    @media ${deviceMaxWidth.mobileL} {
      display: none;
    }
  }

  .greetingCards {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 200px;
  }
  
  .notifications {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-auto-rows: 200px; */
  }

  .cardsWrapContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: 200px;
  }

  // MEDIA QUERIES
  // LARGE MOBILE:
  @media ${deviceMaxWidth.tablet} {
    .greetingCards,
    .notifications,
    .cardsWrapContainer,
    .documentCardContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media ${deviceMaxWidth.mobileL} {
    padding: 0;
    margin-bottom: 6rem;
  }

  .mobileVersion {
    padding: 1rem;

    // Antd fix
    margin-bottom: 5rem;

    @media ${deviceMinWidth.mobileL} {
      display: none;
    }

    background-color: #f3f1f7;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1rem;

    #dashboardVisitsAndContacts {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      height: 9rem;
      width: 100%;
    }

    #calendarContainer {
      border-radius: 1rem;
      width: 100%;
    }

    #calendarTitle {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ shadow }) =>
    shadow === "true" ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "null"};
`;
