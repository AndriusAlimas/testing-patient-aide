import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import background from "../../../../assets/img/login-background.png";
import { colors } from "../../../themes/lightTheme";

export const Container = styled.div`
  margin: 0px;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 480px;
  min-width: 240px;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 40px 40px 10px 40px;
`;

export const Logo = styled.div`
  height: 100px;
  width: 160px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-size: center;
  display: center;
  margin: auto;
  margin-bottom: 30px;
`;

export const DisclaimerText = styled.p`
  font-size: 14px;
  text-align: justify;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 10px 50px;
  margin-bottom: 5px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 40px;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 120px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.auth.primary};
  border-radius: 25px;
  color: ${colors.auth.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.auth.primary};
    color: ${colors.auth.theme};
    cursor: pointer;
  }
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 10px 50px;
  margin-bottom: 5px;
`;

export const VersionNumberText = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 10px 50px;
  margin-bottom: 5px;
`;
