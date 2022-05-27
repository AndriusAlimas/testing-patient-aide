// Import: Packages
import styled from "styled-components/macro";
import {
  deviceMaxWidth,
  deviceMinWidth,
} from "../../../../definitions/breakPoints";

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
    padding-bottom: 2px;

    .accountInfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 10px 0.5rem 8px 0.5rem;
      padding-top: 10px;
      padding-bottom: 8px;
      position: fixed;
      width: 100%;
      z-index: 1;
      top: 0;
      background-color: var(--headers-background-color);
      box-shadow: 0px 3px 4px -3px rgb(133, 131, 134);

      img {
        :nth-child(1) {
          width: 3em;
        }
        :nth-child(3) {
          color: #2a577f;
          width: 2.5em;
        }
      }

      h2 {
        font-size: 15px;
        margin-top: 13px;
      }
    }

    .setOfCards {
      margin-top: 4rem;
    }

    .card {
      width: 92vw;
      height: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 0.7rem;
      transition: 0.3s;
      border: none;
    }
    .cardImg {
      width: 100%;
      height: 14.5rem;
      border-radius: 0.7rem 0.7rem 0 0;
      border: none;
    }

    .cardBody {
      display: flex;
      align-items: center;
      padding: 1rem;
      position: relative;
      height: auto;
    }

    .details {
      display: flex;
      position: relative;
      height: 100%;

      i svg {
        font-size: 2em;
        margin-top: 5px;
        color: #2a577f;
      }

      i img {
        width: 2.5em;
        color: #2a577f;
      }

      .title {
        margin-top: 2rem;
        font-size: 1.3rem;
        font-weight: bold;
        color: black;
      }
      .text {
        margin-top: 0.3rem;
        font-size: 1.1rem;
        color: black;
      }
    }
  }
`;

export const CardContainer = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ shadow }) =>
    shadow === "true" ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "null"};
`;
