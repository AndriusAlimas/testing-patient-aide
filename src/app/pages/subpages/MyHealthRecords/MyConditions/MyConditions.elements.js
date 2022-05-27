// Import: Packages
import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

// Element: Container
export const SectionContainer = styled.section`
  width: 100vw;
  transition: all 0.5s ease;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  position: relative;
  overflow: ${({ popUp }) => (popUp ? "hidden" : "auto")};
  background-color: var(--background-color);
  min-height: 100vh;

  .cardsWrapContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  // MEDIA QUERIES
  // LARGE MOBILE:
  @media ${deviceMaxWidth.mobileL} {
    
    .desktopVersion {
      display: none;
    }
    margin-bottom: 6rem;
    padding-left: 0;
    min-height: 100vh;

    .mobileVersion {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      // Antd fix
      margin-bottom: 5rem;
      

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

      #conditionIcon {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;
