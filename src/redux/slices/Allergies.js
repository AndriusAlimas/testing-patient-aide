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
      throw Error(error);
    }
  }
);

export const allergiesSlice = createSlice({
  name: "allergies",
  initialState: {
    allergiesList: [],
    allergiesStatus: false,
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
  },
});

export default allergiesSlice.reducer;
