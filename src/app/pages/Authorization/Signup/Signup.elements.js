import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../../../assets/img/login-background.png";
import { colors } from "../../../themes/lightTheme";

export const Container = styled.div`
  position: relative;
  min-height: 60rem;
  height: 100vh;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

export const SignupFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 50rem;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 0px 20px;
  background: rgba(244, 244, 244);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Logo = styled.div`
  height: 100px;
  width: 160px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-size: center;
  margin: auto;
`;

// Formik style for input fields
export const StyledLabel = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.input`
  width: 240px;
  border-radius: 10px;
  padding: 12px;
  padding-left: 50px;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${colors.auth.dark1};
  background-color: ${colors.auth.light2};
  border: 0;
  outline: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `border: 1px solid ${colors.auth.red}; color: ${colors.auth.dark1};`}

  &:focus {
    background-color: ${colors.auth.dark2};
    color: ${colors.auth.primary};
  }
`;

export const ValidationCodeIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-size: center;
  margin-top: 3px;
`;

export const StyledIcon = styled.p`
  color: ${colors.auth.dark1};
  position: absolute;
  font-size: 21px;
  top: 37px;
  ${(props) => (props.right ? `right: 15px;` : `left: 15px;`)}
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: ${colors.auth.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

// back to login form style
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.auth.theme};
  border-radius: 25px;
  color: ${colors.auth.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.auth.theme};
    color: ${colors.auth.primary};
    cursor: pointer;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.auth.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    text-decoration: underline;
  }
`;
