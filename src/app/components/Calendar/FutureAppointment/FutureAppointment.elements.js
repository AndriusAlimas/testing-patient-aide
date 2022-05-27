import styled from "styled-components";

export const FutureAppointmentContainer = styled.div`
  margin-bottom: 1rem;

  #appointmentDate {
    color: #88888b;
    font-weight: 600;
    font-size: 0.7rem;
    text-transform: uppercase;
    line-height: 13px;
    margin-bottom: 0.2rem;
    width: 100%;
  }

  #futureAppointmentInfoContainer {
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;

  }

  #appointmentNameAndTimeContainer {
    width: 100%;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  #appointmentName {
    font-size: 0.8rem;
    line-height: 14px;
    color: ${({ color }) => color};
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  #appointmentTime {
    font-size: 0.75rem;
    line-height: 14px;
    color: ${({timeColor}) => timeColor};
    margin: 0;
  }

  #leftBorder {
    border-radius: 3px;
    width: 0.2rem;
    background-color: ${({timeColor}) => timeColor};
    margin-right: 0.4rem;
  }
`;
