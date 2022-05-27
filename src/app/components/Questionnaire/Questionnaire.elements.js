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
  }
`;
