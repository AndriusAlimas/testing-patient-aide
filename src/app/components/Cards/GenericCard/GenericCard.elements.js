// Import: Packages
import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../../definitions/breakPoints";

// Elements: Card Container
export const GenericCardContainer = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  color: var(--main-text-color);
  border-radius: 1rem;
  /* color: var(--main-text-color); */
  font-family: var(--main-font);
  height: ${(props) =>
    props.conditionCard || props.document || props.questionnaireCard
      ? "12.9rem"
      : "auto"};
  margin: 0.5em;
  padding: 1.5em;
  position: relative;
  max-width: ${(props) => (props.patientCard ? "30rem" : "auto")};

  span {
    color: #000;
  }
  .time {
    font-size: 1rem;
  }
  .appointment-header {
    font-size: 1rem;
  }
  .title-text {
    color: #000;
    font-size: 1rem;
  }
  select {
    width: 7rem;
  }
  // Card Container - Tablet view
  @media ${deviceMaxWidth.tablet} {
    height: ${(props) =>
      props.download
        ? "15rem"
        : props.emergencyContact
        ? "auto"
        : props.document
        ? "14rem"
        : "10rem"};
  }
  @media ${deviceMaxWidth.mobileL} {
    height: auto;

    min-height: ${(props) =>
      props.download
        ? "18rem"
        : props.document
        ? "12rem"
        : props.emergencyContact || props.conditionCard
        ? "10rem"
        : props.document
        ? "14rem"
        : "auto"};
  }

  @media ${deviceMaxWidth.mobileL} {
    height: ${(props) => (props.questionnaireCard ? "12.9rem" : "auto")};
    overflow-wrap: break-word;
  }

  @media ${deviceMaxWidth.mobileM} {
    height: auto;
    font-size: 1rem;
  }

  @media ${deviceMaxWidth.mobileS} {
  }

  // Inner-Card Style
  h1 {
    font-size: 1.5em;
    font-weight: 600;
  }

  h2 {
    font-size: 1em;
  }

  // MyConditions Card
  // Card information display - Will only render if card is given property of "infoDisplay"
  .status {
    display: flex;
    color: #ffff;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.infoDisplay && props.iconColor ? props.iconColor : "#D72409"};
    border-radius: 0.25rem;
    bottom: 2.3rem;
    height: fit-content;
    font-size: 1em;
    padding: 0.25rem 1rem;
    position: absolute;
    right: 1.4rem;
    width: auto;

    @media ${deviceMaxWidth.tablet} {
      bottom: 1rem;
    }
    @media ${deviceMaxWidth.mobileL} {
      position: ${(props) => (!props.document ? "relative" : "absolute")};
      bottom: ${(props) => (props.document ? "1rem" : 0)};
      left: ${(props) => (props.document ? "1rem" : 0)};
    }
    margin-top: 1rem;
  }

  // Emergency Card Styling
  .emergencyCard {
    .emergencyContactInfo {
      position: relative;
      margin-left: 8rem;
      bottom: 7rem;
      font-size: 1.3rem;

      h2 {
        font-weight: 600;
        margin: 0;
        margin-bottom: 0.5rem;
      }

      @media ${deviceMaxWidth.mobileL} {
        bottom: 1rem;
        margin-left: 1rem;
        margin: 0;
      }
    }

    button {
      background-color: #ffff;
      border: none;
    }

    p {
      position: relative;
      bottom: 4.5rem;
      font-size: 1.3rem;
      margin: 0;

      @media ${deviceMaxWidth.mobileL} {
        bottom: 1rem;
      }
    }

    .emergencyCardProfileImg {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background-color: ${(props) => props.emergencyCardProfileColor};
      position: relative;
      bottom: 1rem;

      @media ${deviceMaxWidth.mobileL} {
        margin: 1rem 0.25rem;
        display: none;
      }
    }

    .emergencyCardPhoneImage {
      width: 42px;
      height: 41px;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }

    .emergencyCardMoreIcon {
      height: 2rem;
      right: 1rem;
      bottom: 1rem;
      opacity: 0.6;
    }

    .bottomRow {
      position: relative;
      bottom: 3rem;

      button {
        color: var(--main-text-color);
        font-size: 1.3rem;
      }

      @media ${deviceMaxWidth.mobileL} {
        bottom: 0.5rem;
      }
    }
  }

  // Topic and Date styling

  .topicDate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    p {
      margin: 0;
    }
  }
  .topic {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;

    i:nth-child(1) {
      margin-right: 7px;
      padding-bottom: 7px;
      margin-top: 0.3rem;
      font-size: 1.3rem;
    }
  }

  // Result and Measure styling
  .resultMeasure {
    display: flex;
    align-items: baseline;
    color: black;
    margin-left: 0.3rem;
  }
  .measure {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.5rem;
  }
  .count {
    font-weight: bold;
    /* margin-left: 0.5rem; */
  }

  //Document Page Styling
  /* Download Button */
  .download {
    bottom: 0;
    position: absolute;
    width: auto;
    height: 2rem;
    margin: 1rem 0;
    display: inline-block;
    width: 9rem;

    :hover {
      cursor: pointer;
    }
    h3 {
      font-size: 1em;
      position: absolute;
      left: 4em;
      bottom: 0;
      margin: 0;
    }
    img {
      bottom: -6.5em;
      height: 15em;
      left: -6rem;
      position: absolute;
      width: 15em;
    }
    @media ${deviceMaxWidth.tablet} {
      bottom: 0;
      left: 2rem;
    }

    @media ${deviceMaxWidth.mobileL} {
      position: relative;
      bottom: 0;
      left: 0;
    }

    @media ${deviceMaxWidth.mobileM} {
      display: block;
      margin: 0 auto;
    }
  }

  .download-ics {
    height: 2.5rem;
    margin: 1rem auto;
    display: inline-block;
    ${"" /* width: 9rem; */}
    border: 1px solid #1890ff;
    background-color: #248cfc;
    border-radius: 0.6rem;
    ${"" /* width: 80%; */}
  }
  .download-ics img {
    width: 1.7rem;
    margin: 0 0.7rem;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(348deg)
      brightness(103%) contrast(101%);
  }
  .download-ics h3 {
    margin: 0 0.2rem;
    line-height: normal;

    font-size: 1rem;
    color: #fff;
  }
  // Card information display - Will only render if card is given property of "infoDisplay"
  .infoDisplay {
    display: flex;
    color: #ffff;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.infoDisplay && props.iconColor ? props.iconColor : "#D72409"};
    border-radius: 0.25rem;
    bottom: 1rem;
    height: auto;
    font-size: 0.8em;
    padding: 0.25rem 1rem;
    position: absolute;
    right: 1.4rem;
    width: fit-content;

    @media ${deviceMaxWidth.tablet} {
      bottom: 1rem;
    }

    @media ${deviceMaxWidth.mobileL} {
      display: ${(props) =>
        props.download
          ? "inline-block"
          : props.conditionCard
          ? "block"
          : "flex"};
      position: relative;
      bottom: ${(props) => (props.download ? "1.4rem" : 0)};
      left: ${(props) =>
        props.document ? "2rem" : props.conditionCard ? "80%" : 0};
      margin-top: 1rem;
      overflow-wrap: break-word;
    }

    @media ${deviceMaxWidth.mobileM} {
      position: relative;
      display: block;
      margin: 1rem auto;
      right: 0;
      bottom: 0;
      left: 0;
    }

    @media ${deviceMaxWidth.mobileS} {
      margin: 1rem auto 0;
      left: 0;
    }

    // Health WellBeing Page Styling
    .healthCard {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10rem;
    }
  }
`;
