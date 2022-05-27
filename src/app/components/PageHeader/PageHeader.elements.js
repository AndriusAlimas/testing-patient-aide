// Import: Packages
import styled from "styled-components";

// Elements
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  padding: 0.5rem;
  width: 100%;
  border-bottom: ${({ scrollYStatus }) =>
    (scrollYStatus === "scrolling" || scrollYStatus === "bottom") &&
    "1px solid #D3D1D7"};
  background-color: ${({ scrollYStatus }) =>
    scrollYStatus === "near Top" || scrollYStatus === "top"
      ? "var(--background-color)"
      : "rgba(255, 255, 255, 0.8)"};
  backdrop-filter: ${({ scrollYStatus }) =>
    (scrollYStatus === "scrolling" || scrollYStatus === "bottom") &&
    "blur(20px)"};
  margin-bottom: 1rem;
  z-index: 11;
  display: ${({ scrollYStatus, dashboard }) =>
    scrollYStatus === "top" && dashboard ? "none" : "flex"};
  justify-content: center;
  height: 4rem;
  transition: background-color 0.5s;

  h1 {
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
    transition: all 0.3s;
  }

  #headerTitle {
    opacity: ${({ dashboard, scrollYStatus }) =>
      dashboard &&
      (scrollYStatus === "near Top" || scrollYStatus === "top") &&
      "0"};
  }

  #buttonContainer {
    left: 1rem;
    position: absolute;
    top: 1.25rem;
    display: flex;
    align-items: center;
  }

  .backButton {
    background-color: transparent;
    border: none;
    color: var(--link-text-color);
    font-size: 1.1rem;
    margin: 0;
  }

  #backArrow {
    position: relative;
    display: inline-block;
    width: 1.1rem;
    margin-right: 0.1rem;
  }

  #accountIcon,
  #notificationBell {
    opacity: ${({ dashboard, scrollYStatus }) =>
      dashboard &&
      (scrollYStatus === "near Top" || scrollYStatus === "top") &&
      "0"};
    transition: all 0.3s;
  }
`;
