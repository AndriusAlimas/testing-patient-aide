// Import: Packages
import styled from "styled-components";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

// Element:
export const SectionContainer = styled.section`
  width: 100%;
  transition: all 0.5s ease;
  z-index: 2;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  position: relative;
  overflow: auto;
  background-color: var(--background-color);

  .PatientDetailsContainer {
    background-color: white;
    box-shadow: var(--cardbox-shadow);
    border-radius: 5px;
    color: var(--main-text-color);
    font-family: var(--main-font);
    height: auto;
    margin: 0.5em;
    padding: 1.5em;
    position: relative;
    max-width: 50rem;
    display: flex;
    flex-direction: column;

    img {
      width: 4rem;
      height: 5rem;

      @media ${deviceMaxWidth.mobileL} {
        width: 3rem;
        margin-bottom: 6rem;
      }

      @media ${deviceMaxWidth.mobileS} {
        width: 2rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin-left: 2rem;
      max-width: 60%;

      @media ${deviceMaxWidth.tablet} {
        font-size: 1.25rem;
      }

      @media ${deviceMaxWidth.mobileL} {
        font-size: 1rem;
      }

      @media ${deviceMaxWidth.mobileS} {
        font-size: 0.75rem;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      margin: 0 1rem;
      align-items: center;
    }
  }

  @media ${deviceMaxWidth.mobileL} {
    padding: 0;
    margin-bottom: 5rem;
  }
`;
