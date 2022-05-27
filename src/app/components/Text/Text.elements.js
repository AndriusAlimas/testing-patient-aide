// Import: Dependencies
import styled, { css } from "styled-components/macro";
import { colors } from "../../themes/lightTheme";

// Element: StyledText
export const StyledText = styled.span`
  color: ${(props) => props.color ?? colors.auth.primary};
  margin: ${(props) => props.margin ?? 0}px;
  padding: ${(props) => props.padding ?? 0}px;
  ${({ bold, text, authTitle, extraText }) => {
    switch (true) {
      case text:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
      case authTitle:
        return css`
          text-align: center;
          font-size: ${(props) => props.size}px;
          padding: 5px;
          margin-bottom: 20px;
        `;
      case extraText:
        return css`
          text-align: center;
          margin-top: 8px;
          margin-bottom: 12px;
        `;
      default:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
    }
  }}
  font-size: ${({ fontSize }) =>
    fontSize &&
    fontSize}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;
