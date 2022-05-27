import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkUserCredentials = createAsyncThunk(
  "user/login",
  async ({ values }) => {
    try {
      const localUrl = "http://localhost:8080";
      const apiLogin = process.env.REACT_APP_LOGIN_API;
      const currentUrl = apiLogin;

      const config = {
        method: "POST",
        url: `${currentUrl}/user/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: values.username,
          password: values.password,
        },
      };
      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "getUserDetails",
  async (arg, { getState }) => {
    // const state = getState();
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiService = process.env.REACT_APP_SERVICE;
    const apiVersion = process.env.REACT_APP_API_VERSION;
    const username = "fbadea";
    const password = "Lorenzo2!";

    try {
      const config = {
        method: "get",
        url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=${username}&Password=${password}`,
        headers: {
          accept: "application/json",
        },
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const signupUser2 = createAsyncThunk(
  "user/signup",
  async ({ credentials, setFieldError, setSubmitting }) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const apiService = process.env.REACT_APP_SERVICE;
      const apiVersion = process.env.REACT_APP_API_VERSION;
      const username = "sungureanu";
      const password = "Lorenzo!45";
      const localUrl = "http://localhost:8080";
      const apiLogin = process.env.REACT_APP_LOGIN_API;
      const currentUrl = apiLogin;

      const config = {
        method: "put",
        // url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=${username}&Password=${password}`,
        // url: "https://lorenzosv.demo.cloud.healthcare-uk.dxc.technology/LMHIAService/api/v2/claimSet?UserName=mrearden&Password=Lorenzo!23",
        url: `${currentUrl}/user/signup`,
        auth: {
          email: credentials.email,
          password: credentials.password,
          validationCode: credentials.validationCode,
          registrationCode: credentials.registrationCode,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios(config);
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const getPatientDetails = createAsyncThunk(
  "getPatientDetails",
  async (arg, { getState }) => {
    // const state = getState();
    // const apiUrl = process.env.REACT_APP_API_URL;
    // const apiService = process.env.REACT_APP_SERVICE;
    // const apiVersion = process.env.REACT_APP_API_VERSION;
    // const username = "fbadea";
    // const password = "Lorenzo12!";
    const state = getState();
    const envURL = `https://oneedfhirtest.azurewebsites.net`;
    const apiService = `GetPatient`;
    let patientId = `70470`;
    const token = state.user.token;
   
    try {
      const config = {
        method: "get",
        url: `${envURL}/${apiService}/${patientId}`,
        headers: {
          accept: "application/json",
          "Authorization-token": token,
        },
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const getNOK = createAsyncThunk("getNOK", async (arg, { getState }) => {
  const state = getState();
  const envURL = `https://oneedfhirtest.azurewebsites.net`;
  const apiService = `GetNokInfo`;
  let patientId = `70470`;
  const token = state.user.token;

  try {
    const config = {
      method: "get",
      url: `${envURL}/${apiService}/${patientId}`,
      headers: {
        accept: "application/json",
        "Authorization-token": token,
      },
    };

    const response = await axios(config);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error", error.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    checkedCredentials: false,
    errorMessage: "",
    checkingCredentialsResponse: {},
    userDetails: {},
    token: "",
    isAuthenticated: false,
    getUserDetailsStatus: false,
    userDetails2: [],
    userDetailsStatus: false,
    NOK: [],
    nokStatus: false,
  },
  reducers: {
    updateCheckedCredentials: (state, { payload }) => {
      state.checkedCredentials = payload;
    },
    updateIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [checkUserCredentials.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.checkingCredentialsResponse = payload;
      return state;
    },
    [checkUserCredentials.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [checkUserCredentials.pending]: (state) => {
      state.isFetching = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.userDetails = payload;
      state.getUserDetailsStatus = true;
      state.isFetching = false;
      state.token = payload.ControlActEvent.Subject.Value[0].SecurityToken;
      
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.getUserDetailsStatus = false;
      state.isFetching = false;
      // TODO lorenzo error handling
    },
    [getUserDetails.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser2.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [signupUser2.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [signupUser2.pending]: (state) => {
      state.isFetching = true;
    },
    [getPatientDetails.fulfilled]: (state, { payload }) => {
      state.userDetails2 = payload;
      state.userDetailsStatus = true;
    },
    [getPatientDetails.rejected]: (state, { payload }) => {
      state.userDetailsStatus = false;
    },
    [getPatientDetails.pending]: (state) => {
      state.isFetching = true;
    },
    [getNOK.fulfilled]: (state, { payload }) => {
      state.NOK = payload;
      state.nokStatus = true;
    },
    [getNOK.rejected]: (state, { payload }) => {
      state.nokStatus = false;
    },
    [getNOK.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { handleSignInResponse, updateIsAuthenticated, clearState } =
  userSlice.actions;
export default userSlice.reducer;
