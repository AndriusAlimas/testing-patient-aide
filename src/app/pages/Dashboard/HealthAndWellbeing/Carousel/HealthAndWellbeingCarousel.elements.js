import styled from "styled-components";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

export const SectionContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  border-radius: 0.5rem;
  position: relative;

  @media ${deviceMaxWidth.mobileS} {
    margin-top: 0.5rem;
  }

  #CarouselWrapper {
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
  }

  #header {
    font-size: 1.375rem;
    font-weight: 800;
    margin-bottom: 0.6rem;
    line-height: 1.62rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
