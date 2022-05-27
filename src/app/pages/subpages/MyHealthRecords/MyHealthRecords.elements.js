import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../../definitions/breakPoints";

export const Container = styled.div`
  div a {
    text-decoration: none;
    font-size: 20px;
  }
`;

// Element:
export const SectionContainer = styled.section`
  width: 100%;
  transition: all 0.5s ease;
  z-index: 2;
  padding-left: ${({ sidebar }) => (sidebar ? "19rem" : "5rem")};
  position: relative;
  overflow: auto;
  background-color: var(--background-color);

  .cardsWrapContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }

  .smallCard {
    width: 300px;
  }

  @media ${deviceMaxWidth.mobileL} {
    padding: 0;
    margin-bottom: 6rem;

    .cardsWrapContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 5rem;
    }
    .smallCard {
      width: auto;
      div {
        padding: 0rem 0.5rem 0rem 0.5rem;
      }
    }
  }
`;
