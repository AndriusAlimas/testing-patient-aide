import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikLib";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../../components/index";
import { forgottenPassword } from "../../../../redux/userActions";
import { AUTH } from "../../../../assets/constants/constants";

import {
  Container,
  ForgottenPasswordFormWrapper,
  Logo,
  StyledButton,
  StyledButtonWrapper,
  TextLink,
} from "./ForgottenPassword.elements";
import { colors } from "../../../themes/lightTheme";

import OnePatientLogo from "../../../../assets/img/logo/OnePatient.svg";
import { FiMail } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";

export default function ForgottenPassword({ forgottenPassword }) {
  const navigate = useNavigate();
  const { userEmail } = useParams();
  return (
    <Container data-testid={"ForgottenPassword"}>
      <ForgottenPasswordFormWrapper>
        <Logo image={OnePatientLogo} />
        <Text as="h2" authTitle color={colors.auth.theme} size={20}>
          {AUTH.PASSWORD_RESET}{" "}
        </Text>
        <Formik
          initialValues={{
            email: userEmail,
            redirectUrl: "http://localhost:3000/passwordreset",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid mail address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            forgottenPassword(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Enter your email address"
                placeholder="name@example.com"
                icon={<FiMail />}
              />

              <StyledButtonWrapper>
                {isSubmitting ? (
                  <RotatingLines
                    ariaLabel="loading-indicator"
                    color={colors.auth.theme}
                    width={50}
                    strokeWidth={4}
                    animationDuration={2}
                  />
                ) : (
                  <StyledButton type="submit">{AUTH.SUBMIT}</StyledButton>
                )}
              </StyledButtonWrapper>
            </Form>
          )}
        </Formik>
        <Text as="p" extraText color={colors.auth.dark3}>
          {AUTH.REMEMBERED_PASSWORD}
          <TextLink to="/login"> {AUTH.LOGIN} </TextLink>
        </Text>
      </ForgottenPasswordFormWrapper>
    </Container>
  );
}
