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
  background-color: var(--background-color);

  .documentCardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media ${deviceMaxWidth.tablet} {
    .documentCardsContainer {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    }
  }

  @media ${deviceMaxWidth.mobileL} {
    .desktopVersion {
      display: none;
    }

    margin-bottom: 4rem;
    padding-left: 0;

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

      #DocumentIcon {
        height: 2rem;
        width: 2rem;
      }  
    }
  }
`;
