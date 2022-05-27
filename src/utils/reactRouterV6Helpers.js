import React from "react";
import { Route } from "react-router-dom";

// react router dom v6 does not support optional parameter, these helper functions register all nested routes for the optional parameters.
// https://stackoverflow.com/questions/70005601/alternate-way-for-optional-parameters-in-v6
// this feature is requested but not yet implemented, https://github.com/remix-run/react-router/issues/8381
const registerOptionalParamRoute = (optionalParams, element) => {
  if (optionalParams.length === 0) return <React.Fragment />;

  const param = optionalParams[0];
  optionalParams.splice(0, 1);

  return (
    <Route path={param} element={element}>
      {registerOptionalParamRoute(optionalParams, element)}
    </Route>
  );
};

export const registerOptionalParams = (path, element) => {
  const params = path.split("/");
  let basePath = "";
  let optionalParams = [];

  for (let i = 0; i < params.length; i++) {
    if (params[i] === "") continue;

    if (!params[i].includes("?")) basePath += "/" + params[i];
    else optionalParams.push(params[i].substr(0, params[i].length - 1));
  }

  return (
    <Route path={basePath} key={basePath} element={element}>
      {registerOptionalParamRoute(optionalParams, element)}
    </Route>
  );
};
