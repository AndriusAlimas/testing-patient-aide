// Import: Packages
import styled from "styled-components";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

// Element:
export const SectionContainer = styled.section`
  width: 100vw;
  transition: all 0.5s ease;
  z-index: 2;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  position: relative;
  overflow: auto;
  background-color: var(--background-color);

  .cardsWrapContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin-bottom: 5rem;
  }

  @media ${deviceMaxWidth.mobileL} {
    padding: 0;

    .cardsWrapContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media ${deviceMaxWidth.mobileL} {
    height: 100%;

    .desktopVersion {
      display: none;
    }

    margin-bottom: 6rem;
    padding-left: 0;

    .mobileVersion {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      // Antd fix
      margin-bottom: 10rem;

      #iconBg {
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 5rem 0 2rem 0;
        height: 5rem;
        width: 5rem;
      }

      #proceduresIcon {
        height: 2rem;
        width: 2rem;
      }
    
    }
  }
`;
