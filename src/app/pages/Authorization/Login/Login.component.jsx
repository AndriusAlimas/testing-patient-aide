import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikLib";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { Text } from "../../../components/index";
import { connect, useDispatch } from "react-redux";
import { AUTH } from "../../../../assets/constants/constants";
import {
  checkUserCredentials,
  getUserDetails,
  getPatientDetails,
  updateIsAuthenticated,
} from "../../../../redux/slices/UserSlice";
import { setCheckCredentialsErrorMessage } from "../utils";
import {
  Container,
  LoginFormWrapper,
  Logo,
  StyledButtonWrapper,
  StyledButton,
  TextLink,
} from "./Login.elements";
import { colors } from "../../../themes/lightTheme";

import OnePatientLogo from "../../../../assets/img/logo/OnePatientLogo.png";
import { FiUser, FiLock } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";

export default function Login() {
  const { username } = useParams();
  const dispatch = useDispatch();

  const handleSignIn = (values, setSubmitting, setFieldError) => {
    dispatch(checkUserCredentials({ values })).then((data) => {
      if (data.payload.status === "Failed") {
        setCheckCredentialsErrorMessage(data, setSubmitting, setFieldError);
      } else {
        dispatch(getUserDetails())
          .then((data) => {
            dispatch(
              updateIsAuthenticated(
                !!data.payload.ControlActEvent.Subject.Value[0].SecurityToken
              )
            );
          })
          .then(setSubmitting(false));
      }
    });
    dispatch(getPatientDetails());
  };

  return (
    <Container data-testid={"Login"}>
      <LoginFormWrapper>
        <Logo image={OnePatientLogo} />
        <Text as="h2" authTitle color={colors.auth.theme} size={20}>
          {AUTH.LOGIN}
        </Text>
        <Formik
          // initialValues={{ username, password: "" }}
          initialValues={{ username: "fabadea", password: "asdasdasd" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(6, "Minimum 6 characters")
              .max(15, "Maximum 30 characters")
              .required("Required"),
            password: Yup.string()
              .min(8, "Passwords must be at least 8 characters long")
              .max(30, "Passwords must be at most 30 characters long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) =>
            handleSignIn(values, setSubmitting, setFieldError)
          }
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="username"
                type="text"
                label="User Name"
                placeholder="username"
                icon={<FiUser />}
                value="fabadea"
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
                value="asdasdasd"
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
                  <StyledButton type="submit">{AUTH.LOGIN}</StyledButton>
                )}
              </StyledButtonWrapper>
            </Form>
          )}
        </Formik>
        <Text as="p" extraText color={colors.auth.dark3} size={12}>
          {AUTH.LOGIN_FORGOTTEN_PASSWORD}
          <TextLink to="/forgottenpassword"> {AUTH.LOGIN_RESET_IT} </TextLink>
        </Text>
        <Text as="p" extraText color={colors.auth.dark3} size={12}>
          {AUTH.LOGIN_NEW_HERE}
          <TextLink to="/signup"> {AUTH.SIGN_UP}</TextLink>
        </Text>
      </LoginFormWrapper>
    </Container>
  );
}
