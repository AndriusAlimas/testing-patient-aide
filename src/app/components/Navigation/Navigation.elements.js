import styled from "styled-components";
import { deviceMaxWidth } from "../../../definitions/breakPoints";

export const NavigationContainer = styled.div`
  @media ${deviceMaxWidth.mobileL} {
    z-index: 20;
    transition: all 0.5s ease;
    border-top: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" && "1px solid #D3D1D7"};
    background-color: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" ? "rgba(255, 255, 255, 0.8)" : "transparent"};
    backdrop-filter: ${({ scrollYStatus }) =>
      scrollYStatus !== "bottom" && "blur(20px)"};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;

    #navButtonsContainer {
      margin-top:0.2rem;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }

    .navButton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 5rem;
    }

    #homeTitle {
      color: ${({ selectedPage }) =>
        selectedPage === "/dashboard" ? "#E0623F" : "#89888D"};
    }

    #homeIcon {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${({ selectedPage }) =>
        selectedPage === "/dashboard" ? "#E0623F" : "none"};
      stroke: ${({ selectedPage }) =>
        selectedPage === "/dashboard" ? "none" : "#89888D"};
    }

    #myHealthTitle {
      color: ${({ selectedPage }) =>
        selectedPage === "/health-tracker" ? "#E0623F" : "#89888D"};
    }

    #myHealthIcon {
      width: 1.7rem;
      height: 1.5rem;
      fill: ${({ selectedPage }) =>
        selectedPage === "/health-tracker" ? "#E0623F" : "none"};
      stroke: ${({ selectedPage }) =>
        selectedPage === "/health-tracker" ? "none" : "#89888D"};
    }

    #calendarTitle {
      color: ${({ selectedPage }) =>
        selectedPage === "/calendar" ? "#E0623F" : "#89888D"};
    }

    #calendarIcon {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${({ selectedPage }) =>
        selectedPage === "/calendar" ? "#E0623F" : "none"};
      stroke: ${({ selectedPage }) =>
        selectedPage === "/calendar" ? "none" : "#89888D"};
    }

    .title {
      font-size: 0.75rem;
    }
  }
`;
