import React from "react";

import {
  LANDING_PAGE_TEXT,
  AUTH,
} from "../../../../assets/constants/constants";
import {
  Container,
  StyledTitle,
  Logo,
  Wrapper,
  DisclaimerText,
  StyledButtonWrapper,
  StyledButton,
  CopyrightText,
  VersionNumberText,
} from "./LandingPage.elements";
import OnePatientLogo from "../../../../assets/img/logo/OnePatientLogoWhite.png";

export default function LandingPage() {
  return (
    <Container data-testid={"LandingPage"}>
      <Wrapper>
        <StyledTitle>{LANDING_PAGE_TEXT.WELCOME_TO}</StyledTitle>
        <Logo image={OnePatientLogo} />
        <DisclaimerText>{LANDING_PAGE_TEXT.DISCLAIMER[0]}</DisclaimerText>
        <DisclaimerText>{LANDING_PAGE_TEXT.DISCLAIMER[1]}</DisclaimerText>
        <DisclaimerText>{LANDING_PAGE_TEXT.DISCLAIMER[2]}</DisclaimerText>
        <StyledButtonWrapper>
          <StyledButton to="/login">{AUTH.LOGIN}</StyledButton>
          <StyledButton to="/signup">{AUTH.SIGN_UP}</StyledButton>
        </StyledButtonWrapper>
        <CopyrightText>{LANDING_PAGE_TEXT.COPYRIGHT}</CopyrightText>
        <VersionNumberText>{LANDING_PAGE_TEXT.VERSION_NO}</VersionNumberText>
      </Wrapper>
    </Container>
  );
}
