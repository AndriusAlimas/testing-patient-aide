import styled from "styled-components";
import { deviceMaxWidth } from "../../../../../definitions/breakPoints";

export const CardContainer = styled.div`
  border-radius: 0.6rem;
  background-image: ${({bgImg}) => `url(${bgImg})`};
  background-size: cover;
  background-position: 55% 0%;
  position: relative;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9.8rem;

  @media ${deviceMaxWidth.mobileS} {
      height: 8rem;
    }


  a {
    height: 100%;
    width: 100%;
  }

  #title {
    font-weight: 800;
    font-size: 1rem;
    margin: 0;

    @media ${deviceMaxWidth.mobileS} {
      font-size: 0.8rem;
    }
  }

  #textContainer {
    width: 100%;
    position: absolute;
    bottom: -0.2rem;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    border-radius: 0rem 0rem 0.6rem 0.6rem;
    padding: 0.3rem;
    height: 3.5rem;
  }

  #text {
    margin: 0;
    font-size: 0.7rem;
    color: black;
    width: 90%;
    line-height: 0.8rem;
  }
`;
