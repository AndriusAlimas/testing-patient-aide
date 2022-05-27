// Import: Packages
import React from "react";
import { AUTH } from "../../../../assets/constants/constants";

import {
  Container,
  LogoContainer,
  Logo,
  MessageWrapper,
  StyledTitle,
  ExtraText,
  StyledButton,
  StyledButtonWrapper,
} from "./EmailSent.elements";
import { colors } from "../../../themes/lightTheme";

import OnePatientLogo from "../../../../assets/img/logo/OnePatientLogoWhite.png";
import { useParams } from "react-router-dom";

function EmailSent() {
  const { userEmail, reset } = useParams();

  return (
    <Container>
      <LogoContainer>
        <Logo image={OnePatientLogo} />
      </LogoContainer>
      {reset && userEmail ? (
        <MessageWrapper bg={colors.auth.dark1}>
          <StyledTitle size={24}>{AUTH.PASSWORD_RESET}</StyledTitle>
          <ExtraText size={18}>
            {AUTH.LINK_PASSWORD_RESET}
            <b style={{ color: colors.auth.primary }}>{userEmail}</b>
          </ExtraText>
          <ExtraText size={21} color={colors.auth.light1}>
            {AUTH.CHECK_EMAIL}
          </ExtraText>
          <StyledButtonWrapper>
            <StyledButton to={`/login/${userEmail}`}>
              {AUTH.PROCEED}
            </StyledButton>
          </StyledButtonWrapper>
        </MessageWrapper>
      ) : !reset && userEmail ? (
        <MessageWrapper bg={colors.auth.dark1}>
          <StyledTitle size={24}>{AUTH.ACCOUNT_CONFIRMATION}</StyledTitle>
          <ExtraText size={21}>
            {AUTH.LINK_ACCOUNT_CONFIRMATION}{" "}
            <b style={{ color: colors.auth.primary }}>{userEmail}</b>
          </ExtraText>
          <ExtraText size={21} color={colors.auth.light1}>
            {AUTH.CHECK_EMAIL}{" "}
          </ExtraText>
          <StyledButtonWrapper>
            <StyledButton to={`/login/${userEmail}`}>
              {AUTH.PROCEED}
            </StyledButton>
          </StyledButtonWrapper>
        </MessageWrapper>
      ) : !reset && !userEmail ? (
        <MessageWrapper bg={colors.auth.dark1}>
          <StyledTitle size={24}>{AUTH.PASSWORD_RESET}</StyledTitle>
          <ExtraText size={21}>{AUTH.RESET_SUCCESSFULLY} </ExtraText>
          <ExtraText size={21} color={colors.auth.light1}>
            {AUTH.MAY_LOGIN}{" "}
          </ExtraText>
          <StyledButtonWrapper>
            <StyledButton to={"/login"}>{AUTH.PROCEED}</StyledButton>
          </StyledButtonWrapper>
        </MessageWrapper>
      ) : null}
    </Container>
  );
}

export default EmailSent;
