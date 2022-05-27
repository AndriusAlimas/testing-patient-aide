import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// create function
export const getAllergies = createAsyncThunk(
  "getAllergies",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetAllergies";
    const patientId = `70470`;
    const token = state.user.token;
    // https://oneedfhirtest.azurewebsites.net/GetAllergies/70470
    try {
      const config = {
        method: "GET",
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

export const getAllergyDetails = createAsyncThunk(
  "getAllergyDetails",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetAllergyDetail";
    const patientId = `70470`;
    const allergyId = arg;
    const token = state.user.token;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${patientId}/${allergyId}`,
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
// create slice
export const allergiesSlice = createSlice({
  name: "allergies",
  initialState: {
    allergiesList: [],
    allergiesStatus: false,
    allergyDetails: {},
    allergyDetailsStatus: false,
    errorMessage: "",
  },
  extraReducers: {
    [getAllergies.fulfilled]: (state, { payload }) => {
      state.allergiesStatus = true;
      state.allergiesList = payload;
      return state;
    },
    [getAllergies.rejected]: (state, { payload }) => {
      state.allergiesStatus = false;
      state.errorMessage = payload.message;
    },
    [getAllergies.pending]: (state) => {
      state.allergiesStatus = false;
    },
    [getAllergyDetails.fulfilled]: (state, { payload }) => {
      state.allergyDetailsStatus = true;
      state.allergyDetails = payload;
      return state;
    },
    [getAllergyDetails.rejected]: (state, { payload }) => {
      state.allergyDetailsStatus = false;
      state.errorMessage = payload.message;
    },
    [getAllergyDetails.pending]: (state) => {
      state.allergyDetailsStatus = false;
    },
  },
});

export default allergiesSlice.reducer;
