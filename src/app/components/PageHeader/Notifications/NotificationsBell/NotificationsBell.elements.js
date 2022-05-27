import styled from "styled-components";

export const NotificationBellContainer = styled.div`
  position: ${({ dashboard }) => (dashboard ? "relative" : "absolute")};
  display: ${({ dashboard }) => dashboard && "inline-block"};
  left: ${({ dashboard }) => (dashboard ? "0" : "0.5rem")};
  top: ${({ dashboard }) => (dashboard ? "0" : "1rem")};

  #notificationBell {
    width: 2.5rem;
  }
`;
