import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: SectionContainer
export const SectionContainer = styled.section`
  width: 100%;
  transition: all 0.5s ease;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  position: relative;
  overflow: auto;
  background-color: var(--background-color);

  h1 {
    display: none;
  }
  .cardsWrapContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  label {
    height: auto;
  }

  // MEDIA QUERIES
  // LARGE MOBILE:
  @media ${deviceMaxWidth.tablet} {
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

    h1 {
      display: block;
      width: 100%;
      text-align: center;
      margin: 1rem auto;
    }
    p {
      font-size: 15px;
    }

    ul {
      font-size: 15px;
    }

    label {
      font-size: 15px;
    }
    /* The container */
    .container {
      display: block;
      position: relative;
      padding-left: 28px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 15px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid grey;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: rgb(224, 98, 63);
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
      top: 8px;
      left: 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }
`;
