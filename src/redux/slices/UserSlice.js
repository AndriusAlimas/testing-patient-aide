import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkUserCredentials = createAsyncThunk(
  "user/login",
  async ({ values }) => {
    try {
      const apiLogin = process.env.REACT_APP_LOGIN_API;
      const localUrl = "http://localhost:8080";
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
      throw Error(error);
    }
  }
);

export const getClinicianDetails = createAsyncThunk(
  "getClinicianDetails",
  async () => {
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
      throw Error(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ credentials, setFieldError, setSubmitting }) => {
    try {
      const username = "fbadea";
      const password = "Lorenzo2!";
      const localUrl = "http://localhost:8080";
      const apiLogin = process.env.REACT_APP_LOGIN_API;
      const currentUrl = apiLogin;

      const config = {
        method: "put",
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

      return data;
    } catch (error) {
      console.log("Error", error.response.data);
      throw Error(error);
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
    // https://oneedfhirtest.azurewebsites.net/GetPatient/70745
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
      throw Error(error);
    }
  }
);

export const getNextOfKin = createAsyncThunk(
  "getNextOfKin",
  async (arg, { getState }) => {
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
      return data;
    } catch (error) {
      console.log("Error", error.response.data);
      throw Error(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    checkedCredentials: false,
    errorMessage: "",
    checkingCredentialsResponse: {},
    clinicianDetails: {},
    token: "",
    isAuthenticated: false,
    getClinicianStatus: false,
    userDetails: [],
    userDetailsStatus: false,
    nextOfKin: [],
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
    [getClinicianDetails.fulfilled]: (state, { payload }) => {
      state.clinicianDetails = payload;
      state.getClinicianStatus = true;
      state.isFetching = false;
      state.token = payload.ControlActEvent.Subject.Value[0].SecurityToken;
    },
    [getClinicianDetails.rejected]: (state, { payload }) => {
      state.getClinicianStatus = false;
      state.isFetching = false;
      // TODO lorenzo error handling
    },
    [getClinicianDetails.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [getPatientDetails.fulfilled]: (state, { payload }) => {
      state.userDetails = payload;
      state.userDetailsStatus = true;
    },
    [getPatientDetails.rejected]: (state, { payload }) => {
      state.userDetailsStatus = false;
    },
    [getPatientDetails.pending]: (state) => {
      state.isFetching = true;
    },
    [getNextOfKin.fulfilled]: (state, { payload }) => {
      state.nextOfKin = payload;
      state.nokStatus = true;
    },
    [getNextOfKin.rejected]: (state, { payload }) => {
      state.nokStatus = false;
    },
    [getNextOfKin.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { handleSignInResponse, updateIsAuthenticated, clearState } =
  userSlice.actions;
export default userSlice.reducer;
