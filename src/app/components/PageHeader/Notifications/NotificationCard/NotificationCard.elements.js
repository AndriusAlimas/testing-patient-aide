// Import: packages
import styled from "styled-components";

// Elements
export const NotificationStyles = styled.section`
  position: relative;
  background-color: rgba(162, 170, 173, 0.2);
  opacity: calc() 0.5;
  border-radius: 0.5rem;
  position: relative;
  margin: 0.5rem 0;
  z-index: 91;

  a {
    padding-right: 1rem;
  }

  li {
    display: flex;
    align-items: center;
  }

  .notificationIcon {
    height: 1.5rem;
    margin-left: 0.2rem;
    top: 1rem;
    width: 1.5rem;
  }

  .notificationText {
    color: #2a577f;
    margin-left: 1rem;

    #title {
      font-size: 1rem;
      padding: 1rem 1rem 0.5rem 0rem;
      margin: 0;
      font-weight: 600;
    }

    p {
      padding: 0rem 1rem 0.5rem 0rem;
      margin: 0;
    }
  }

  #closeIcon {
    top: 0.25rem;
    position: absolute;
    right: 0.5rem;
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;
  }
`;
