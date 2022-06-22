import styled from "styled-components";

export const DashboardHeadContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  font-weight: 600;
  position: relative;
  height: fit-content;

  h1 {
    max-width: 85%;
    overflow-wrap: break-word;
    line-height: 2rem;
    font-weight: 800;
    font-size: 2.1rem ;
    margin: 0;
  }

#notificationMessage{
  width: fit-content;
  margin-top:0.2rem;
}

  #notificationText {
    position: relative;
    margin-bottom: 0.5rem;
    right: 0.3rem;
    font-weight: 800;
    font-size: 0.9rem;
  }

  #numOfNotifications{
    font-size: 1rem;
  }

  #accountIcon {
    height: 2rem;
  }

  #accountIconBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    top: -0.5rem;
    height: 3rem;
    width: 3rem;
    background-color: white;
    border-radius: 50%;
  }
`;
