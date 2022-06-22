import styled from "styled-components";

export const NotificationBellContainer = styled.div`
  position: ${({ dashboard }) => (dashboard ? "relative" : "absolute")};
  display: ${({ dashboard }) => dashboard && "inline-block"};
  left: ${({ dashboard }) => (dashboard ? "0" : "0.7rem")};
  top: ${({ dashboard }) => (dashboard ? "0" : "1.35rem")};

  #notificationBell {
    height: 1.8rem;
    width: 2.2rem;
  }
`;
