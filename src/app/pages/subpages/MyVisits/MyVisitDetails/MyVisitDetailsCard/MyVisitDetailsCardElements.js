import styled from 'styled-components/macro';
import { deviceMaxWidth } from '../../../../../../definitions/breakPoints';

export const MyVisitDetailsCardContainer = styled.div`
margin-top:1rem;
  width: 100%;
  border-radius: 0.6rem;
  background: ${({ bgColor1, bgColor2 }) =>
    `linear-gradient(86.2deg, ${bgColor2} 3.37%, ${bgColor1}  87.38%)`};
  height: 6rem;
  margin-bottom: 0.6rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.8rem;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  #cardText {
    max-width: 70%;
    color: white;
    font-weight: 400;

    @media ${deviceMaxWidth.mobileS} {
      max-width: 70%;
    }
  }

  #title {
    font-size: 1.33rem;
    margin: 0;
    color: white;
    font-weight: 600;
  }

  #description {
    font-size: 0.9rem;
  }

  #iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  #icon {
    background-color: white;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
      height: 2rem;
      width: 2rem;
    }
  }
`;