// Import: Packages
import styled from "styled-components";
import { deviceMaxWidth } from "../../../../definitions/breakPoints";

// Element:
export const SectionContainer = styled.section`
  width: 100vw;
  margin-bottom: 6rem;
  padding-left: 0;

  .mobileVersion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

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

      #visitHistoryIcon {
        height: 2rem;
        width: 2rem;
      }
  }
`;
