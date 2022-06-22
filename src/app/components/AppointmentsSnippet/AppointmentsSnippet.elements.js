import styled from "styled-components";

export const AppointmentsSnippetContainer = styled.div`
  background-color: white;
  display: flex;
  position: relative;
  padding: 1rem;
  justify-content: space-between;
  width: 100%;
  border-radius: 0.6rem;

  #currentDateContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
    padding-right: 1rem;
  }

  #futureDatesContainer {
    width: 50%;
  }

  #noAppointmentsContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
  }

  #noAppointments {
    color: #88888b;
    font-size: 1.2rem;
    width: 6em;
    text-align: center;
  }
`;

export const NoAppointmentContainer = styled.div`
  width: 100%;
  #noAppointment {
    font-size: 1rem;
    color: #88888b;
    line-height: 1.2rem;
    width: 80%;
  }
`;

export const LeftView = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
