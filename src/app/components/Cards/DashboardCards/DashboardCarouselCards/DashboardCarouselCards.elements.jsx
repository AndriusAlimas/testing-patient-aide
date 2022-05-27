import styled from "styled-components";

export const CardContainer = styled.div`
  flex: 0 0 7.1rem;
  margin: 0.2rem 0.3rem;
  border-radius: 0.6rem;
  background: ${({ bgColor1, bgColor2 }) =>
    `linear-gradient(208.14deg, ${bgColor1} 52.57%, ${bgColor2} 99.79%)`};
  position: relative;
  height: 7.1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #title {
    position: absolute;
    text-align: center;
    top: 0.3rem;
    color: white;
    font-size: 0.82rem;
    right: 0.5rem;
    font-weight: 600;
  }

  #iconBg {
    top: 0.3rem;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }

  img {
    height: 1.9rem;
    width: 1.9rem;
  }
`;
