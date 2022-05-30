// Import: packages
import styled from "styled-components";

// Elements
export const SortByFilterContainer = styled.div`
  position: absolute;
  top: -0.2rem;
  right: -1.5rem;
  z-index: 3;

  img {
    transform: ${({ sortDateStatus }) =>
      sortDateStatus !== "dateAscending" && "scaleY(-1)"};
    width: 2rem;
    height: 2rem;
  }
`;
