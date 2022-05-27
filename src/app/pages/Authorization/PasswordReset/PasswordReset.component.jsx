import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikLib";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../../components/index";
import { resetPassword } from "../../../../redux/userActions";
import { AUTH } from "../../../../assets/constants/constants";

import {
  Container,
  PasswordResetFormWrapper,
  Logo,
  StyledButtonWrapper,
  StyledButton,
} from "./PasswordReset.elements";
import { colors } from "../../../themes/lightTheme";

import OnePatientLogo from "../../../../assets/img/logo/OnePatientLogo.png";
import { FiLock } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";

export default function PasswordReset({ resetPassword }) {
  const navigate = useNavigate();
  const { userId, resetString } = useParams();
  return (
    <Container data-testid={"PasswordReset"}>
      <PasswordResetFormWrapper>
        <Logo image={OnePatientLogo} />
        <Text as="h2" authTitle color={colors.auth.theme} size={20}>
          {AUTH.PASSWORD_RESET}{" "}
        </Text>
        <Formik
          initialValues={{
            password: "",
            confirmNewPassword: "",
            userId,
            resetString,
          }}
          validationSchema={Yup.object({
            newPassword: Yup.string()
              .min(8, "Passwords must be at least 8 characters long")
              .max(30, "Passwords must be at most 30 characters long")
              .required("Required"),
            confirmNewPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("newPassword")], "Password must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            resetPassword(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="newPassword"
                type="password"
                label="New Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <TextInput
                name="confirmNewPassword"
                type="password"
                label="Confirm New Password"
                placeholder="********"
                icon={<FiLock />}
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
      </PasswordResetFormWrapper>
    </Container>
  );
}
