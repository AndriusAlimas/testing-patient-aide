import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikLib";
import * as Yup from "yup";
import { Text } from "../../../components/index";
import { useDispatch } from "react-redux";
import { AUTH } from "../../../../assets/constants/constants";
import { signupUser } from "../../../../redux/slices/UserSlice";
import { isValid } from "../utils";

import {
  Container,
  SignupFormWrapper,
  StyledButton,
  StyledButtonWrapper,
  Logo,
  TextLink,
  ValidationCodeIcon,
} from "./Signup.elements";
import { colors } from "../../../themes/lightTheme";

import OnePatientLogo from "../../../../assets/img/logo/OnePatientLogo.png";
import NHSLogo from "../../../../assets/img/logo/nhs-register-logo.png";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaSms } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

export default function SignUp() {
  const dispatch = useDispatch();

  return (
    <Container data-testid={"Signup"}>
      <SignupFormWrapper>
        <Logo image={OnePatientLogo} />
        <Text as="h2" authTitle color={colors.auth.theme} size={20}>
          {AUTH.SIGN_UP}
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            registrationCode: "",
            validationCode: "",
          }}
          validateOnChange={false} // disable on every keystroke
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Wrong email format")
              .test("Email test", "Email already taken", async (value) => {
                const valueIsValid = await isValid("email", value);
                return valueIsValid;
              })
              .required("Required"),
            username: Yup.string()
              .min(6, "Minimum 6 characters")
              .max(15, "Maximum 30 characters")
              .test("Username test", "User Name already taken", (value) =>
                isValid("username", value)
              )
              .required("Required"),
            password: Yup.string()
              .min(8, "Passwords must be at least 8 characters long")
              .max(30, "Passwords must be at most 30 characters long")
              .required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Password must match"),
            registrationCode: Yup.string().required("Required"),
            validationCode: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            dispatch(
              signupUser({ credentials: values, setFieldError, setSubmitting })
            );
            // signUpUser(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="name@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="username"
                type="text"
                label="User Name"
                placeholder="username"
                icon={<FiUser />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <TextInput
                name="registrationCode"
                type="text"
                label="Registration Code"
                placeholder="received via mail"
                icon={<ValidationCodeIcon image={NHSLogo} />}
              />
              <TextInput
                name="validationCode"
                type="text"
                label="Validation Code"
                placeholder="received via SMS"
                icon={<FaSms />}
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
                  <>
                    <StyledButton type="submit">{AUTH.REGISTER}</StyledButton>
                  </>
                )}
              </StyledButtonWrapper>
            </Form>
          )}
        </Formik>
        <Text as="p" extraText color={colors.auth.dark3}>
          {AUTH.ALREADY_HAVE_AN_ACCOUNT}
          <TextLink to="/login"> {AUTH.SIGN_IN}</TextLink>
        </Text>
      </SignupFormWrapper>
    </Container>
  );
}
