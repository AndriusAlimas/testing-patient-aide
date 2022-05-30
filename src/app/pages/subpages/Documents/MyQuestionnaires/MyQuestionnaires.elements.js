// Import: Packages
import styled from "styled-components/macro";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

// Element:
export const SectionContainer = styled.section`
  width: 100vw;

  @media ${deviceMaxWidth.mobileL} {
    .mobileVersion {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
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

      #QuestionnaireIcon {
        height: 2rem;
        width: 2rem;
      }

      #questionnaireStatus {
        width: 80vw;
        display: flex;
        justify-content: space-around;
        margin: 2rem 0 1rem 0;
        border-bottom: 1px solid rgba(133, 131, 134, 0.4);
        position: relative;

        h2 {
          font-size: 1.1rem;
        }

        #statusPendingContainer {
          text-align: center;
          border-bottom: ${({ completionStatus }) =>
            completionStatus === "in-progress" && "2px solid #E0623F"};
          width: 100%;
        }

        #statusCompleteContainer {
          text-align: center;
          border-bottom: ${({ completionStatus }) =>
            completionStatus === "complete" && "2px solid #E0623F"};
          width: 100%;
        }
      }
    }
  }
`;

export const Overlay = styled.div`
  transition: opacity 0.5s ease-in;
  height: 100vh;
  width: 100vw;
  background-color:  ${({addNewQuestionnaire}) => addNewQuestionnaire ? "#000" : "rgb(242, 241, 247)"};;
  opacity: ${({addNewQuestionnaire}) => addNewQuestionnaire ? "0.2" : "0"};
  z-index: ${({addNewQuestionnaire}) => addNewQuestionnaire ? "21" : "-1"};
  position: fixed;
`;

export const CardContainer = styled.div`
  box-shadow: ${({ shadow }) =>
    shadow === "true" ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "null"};
`;
