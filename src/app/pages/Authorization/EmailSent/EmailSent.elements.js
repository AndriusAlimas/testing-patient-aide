import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import background from "../../../../assets/img/login-background.png";
import { colors } from "../../../themes/lightTheme";

export const Container = styled.div`
  position: relative;
  margin: 0;
  min-height: 100vh;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  padding: 15px;
`;

export const Logo = styled.div`
  height: 100px;
  width: 160px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-size: center;
  margin: auto;
`;

export const MessageWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;

export const ExtraText = styled.p`
  position: relative;
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.auth.primary)};
  padding: 5px;
  overflow-wrap: break-word;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
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
