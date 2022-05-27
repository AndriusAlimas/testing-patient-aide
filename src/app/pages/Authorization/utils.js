import axios from "axios";
const apiLogin = process.env.REACT_APP_LOGIN_API;
const localUrl = "http://localhost:8080";
const currentUrl = apiLogin;

export const setCheckCredentialsErrorMessage = (
  data,
  setSubmitting,
  setFieldError
) => {
  const { message } = data.payload;
  if (message.includes("verified")) {
    setFieldError("username", message);
  } else if (message.includes("credentials")) {
    setFieldError("username", message);
    setFieldError("password", message);
  } else if (message.includes("password")) {
    setFieldError("password", message);
  }
  setSubmitting(false);
};

export async function isValid(keyName, valueToCheck) {
  console.log(valueToCheck);

  if (valueToCheck === undefined) return null;

  const response = await axios
    .get(`${currentUrl}/user/checkUserData`, {
      params: { [keyName]: valueToCheck },
      headers: { "Content-Type": "text/html" },
    })
    .then((response) => {
      console.log(response);
      const { message } = response.data;
      if (message.includes("taken")) {
        return false;
      } else if (message.includes("unique")) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}
