import axios from "axios";
import { sessionService } from "redux-react-session";

// the remote endpoint and local
const apiLogin = process.env.REACT_APP_LOGIN_API;
const localUrl = "http://localhost:8080";
const currentUrl = apiLogin;

export const signUpUser = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .put(`${currentUrl}/user/signup`, credentials, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const { data } = response;
        console.log(data);

        if (data.status === "Failed") {
          const { message } = data;
          // check errors from the back end
          if (message.includes("existing user")) {
            setFieldError("email", message);
          } else if (message.includes("duplicate")) {
            setFieldError("email", message);
          } else if (message.includes("verified")) {
            setFieldError("email", message);
          }
          // else if (message.includes("Password")) {
          //   setFieldError("password", message);
          // }
          else if (message.includes("Registration")) {
            setFieldError("registrationCode", message);
          } else if (message.includes("Validation")) {
            setFieldError("validationCode", message);
          }
        } else if (data.status === "Pending") {
          console.log("pending");
          // display message for email verification
          const { email } = credentials;

          navigate(`/emailsent/${email}`);
        }
        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
};

export const logoutUser = (navigate) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    navigate("/landing");
  };
};

export const forgottenPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post(`${currentUrl}/user/requestPasswordReset`, credentials, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;

          // check errors from the back end
          if (
            message.includes("user") ||
            message.includes("password") ||
            message.includes("email")
          ) {
            setFieldError("email", message);
          }
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}/${true}`);
        }

        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
};

// Actual password reset
export const resetPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post(`${currentUrl}/user/resetPassword`, credentials, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;

          // check errors from the back end
          if (message.includes("password")) {
            setFieldError("newPassword", message);
          }
        } else if (data.status === "Success") {
          navigate("/emailsent");
        }

        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
};
