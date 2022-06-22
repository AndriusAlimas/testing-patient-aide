// Import: Packages
import styled from "styled-components/macro";
import { keyframes } from "styled-components";

// Elements: GenericPopUpElement
const appear = keyframes`
0%{
    transform: translateY(100%);
}
100%{
    transform: translateY(0%);
}`;

export const GenericPopUpElement = styled.section`
  box-shadow: ${({ AddQuestionnaireMenu }) =>
    AddQuestionnaireMenu ? "none" : " 3px -5px 6px #00000040"};
  background-color: #f3f1f7;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 0;
  position: fixed;
  margin: 0 auto;
  width: 98vw;
  height: ${({ AddQuestionnaireMenu }) =>
    AddQuestionnaireMenu ? " fit-content" : "98%"};
  bottom: 0;
  animation: ${appear} 0.6s;
  overflow: hidden;
  z-index: ${({ AddQuestionnaireMenu }) =>
    AddQuestionnaireMenu ? "30" : "12"};

  header {
    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--link-text-color);
      font-size: 1.1rem;
      position: absolute;
      right: 1rem;
      top: 0.8rem;
    }
  }

  #profileImg {
    text-align: center;
    margin: 3.5rem 0;

    #imgContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: white;
      height: 5rem;
      width: 5rem;
      margin: 0 auto;
    }

    img {
      height: 2rem;
    }
  }

  #container {
    overflow: scroll;
    height: ${(props) =>
      props.addProfileImg || props.addAllergyIcon ? "55%" : "80%"};
    padding: 0 1rem;
    margin-top: ${(props) =>
      props.addProfileImg || props.addAllergyIcon ? 0 : "3rem"};
  }

  table {
    background-color: white;
    border-radius: 1rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    tbody {
      width: 100%;
    }

    th {
      width: 100%;
      position: absolute;
      margin-left: 1rem;
      top: -1rem;
    }

    tr {
      border-bottom: 2px solid #f8f8f8;
      display: flex;
      justify-content: space-between;
      width: 98%;

      td:nth-of-type(2) {
        overflow-wrap: break-word;
        text-align: end;
      }
    }

    tr:last-of-type {
      border: none;
    }

    td {
      padding: 0.5rem 0.6rem;
      max-width: 50%;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  #changeLogin {
    margin: 1.5rem 0;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0.5rem;
    }

    td {
      font-weight: 300;
    }

    .changeLoginLink {
      color: #0572fd;
    }

    .userLoginInfo {
      color: grey;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  /* Document View */
  #documentDidNotLoad {
    text-align: center;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 100%;
    width: 100%;
    background-color: white;

    #pdfIcon {
      height: 10rem;
      width: 10rem;
      margin-bottom: 3rem;
    }
  }
`;
