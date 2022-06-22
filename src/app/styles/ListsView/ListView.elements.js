// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const ListViewContainer = styled.section`
  width: 100%;
  overflow: scroll;
  height: 100%;
  margin-bottom: 5rem;

  ul {
    padding: 0;
  }

  #cardContainer {
    background-color: white;
    border-bottom: 2px solid #f8f8f8;
    border-radius: 1rem;
    padding: 1rem;
    list-style: none;
    position: relative;
    margin-top: 0.5rem;
    overflow-wrap: break-word;
  }

  #cardTextContainer {
    max-width: 75%;
  }

  #cardHeader {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .cardDetailText {
    color: black;
    font-size: 1rem;
    font-weight: normal;
    font-size: 1.1rem;
    margin: ${({ questionnaireMenu }) => questionnaireMenu && "0"};

    span {
      font-size: 1rem;
      margin: 0;
    }
  }

  .arrowIcon {
    color: var(--link-text-color);
    font-size: 1rem;
    position: absolute;
    display: flex;
    align-items: center;
    right: 1rem;
    top: 1rem;

    p {
      margin: 0;
    }

    img {
      position: relative;
      width: 1rem;
      transform: scaleX(-1);
      top: 0.05rem;
    }
  }

  .careSphereList {
    #cardContainer {
      padding: 0.7rem 1rem;
    }

    #cardHeader {
      color: grey;
      font-size: 0.8rem;
    }

    #telephone {
      font-size: 1rem;
      color: var(--link-text-color);
    }
  }
`;
