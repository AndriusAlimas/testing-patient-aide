import { useState } from "react";

import { useField } from "formik";
import {
  StyledLabel,
  StyledTextInput,
  StyledIcon,
  ErrorMessage,
} from "./Login.elements";
import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {props.type === "password" ? (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      ) : (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      <StyledIcon>{icon}</StyledIcon>
      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} right>
          {show ? <FiEye /> : <FiEyeOff />}
        </StyledIcon>
      )}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : (
        <ErrorMessage style={{ visibility: "hidden" }}>.</ErrorMessage>
      )}
    </div>
  );
};
