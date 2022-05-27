// Import: packages
import styled from "styled-components";

// Elements
export const SortByFilterContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 1rem;
  z-index: 3;

  img {
    transform: ${({ sortDateStatus }) =>
      sortDateStatus !== "dateAscending" && "scaleY(-1)"};
    width: 2rem;
    height: 2rem;
  }
`;
