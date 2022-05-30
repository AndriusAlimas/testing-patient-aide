import { keyframes } from "styled-components";
import styled from "styled-components";

const appear = keyframes`
0%{
    transform: translateY(100%);
}
100%{
    transform: translateY(0%);
}`;

export const AddQuestionnaireMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 100%;
  background-color: #f3f1f7;
  border-radius: 1rem 1rem 0 0;
  position: fixed;
  margin: 0 auto;
  width: 98vw;
  height: fit-content;
  bottom: 0;
  animation: ${appear} 0.6s;
  overflow: hidden;
  z-index: 30;
  border-bottom: 1px solid;

  #cardHeader {
    display: flex;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #e4e2eb;
    padding: 1rem 1rem 0rem 1rem;

    #cardHeaderIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.4rem;
      width: 2.4rem;
      position: relative;
      background-color: white;
      border-radius: 50%;
      margin-right: 0.6rem;
      top: 0rem;

      img {
        height: 1.3rem;
        width: 1.3rem;
      }
    }
    #exitIcon {
      background-color: #807f84;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      position: absolute;
      right: 1.3rem;
      top: 1.3rem;

      img {
        width: 1.7rem;
        height: 1.7rem;
      }
    }

    #cardHeaderText {
      max-width:70%;
      
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        color: black;
        
      }

      p {
        font-size: 0.8rem;
        margin-bottom: 0.4rem;
        color: black;
      }
    }
  }

  #questionnaireListContainer {
    padding: 0.6rem 1rem;
  }
`;
