import styled from "styled-components";

export const VisitHistoryContainer = styled.div`
  margin: 0.4rem;
  border-radius: 0.3rem;
  background-color: #ea969b;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 100%;
    width: 100%;
  }

  #title {
    position: absolute;
    color: white;
    font-size: 1.2rem;
    top: 0.5rem;
    left: 1rem;
  }

  #textContainer {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    border-radius: 0 0 0.3rem 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text {
    color: white;
    text-align: center;
    margin: 0;
  }

  img {
    position: absolute;
    height: 95%;
    width: 95%;
  }
`;
