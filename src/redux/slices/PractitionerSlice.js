import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get list of conditions
export const getPractitionerDetails = createAsyncThunk(
  "practitioner/getPractitionerDetails",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "getPractitioner";
    const token = state.user.token;
    const practitionerId = arg;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${practitionerId}`,
        headers: {
          accept: "application/json",
          "Authorization-token": token,
        },
      };
      const response = await axios(config);
      const data = await response.data;
      console.log(data, "list");

      return data;
    } catch (error) {
      console.log("Error", error.response.data);
      throw Error(error);
    }
  }
);

export const practitionerSlice = createSlice({
  name: "practitioner",
  initialState: {
    practitionerDetails: {},
    practitionerDetailsStatus: false,
  },
  extraReducers: {
    [getPractitionerDetails.fulfilled]: (state, { payload }) => {
      state.practitionerDetailsStatus = true;
      state.practitionerDetails = payload;
      return state;
    },
    [getPractitionerDetails.rejected]: (state, { payload }) => {
      state.practitionerDetailsStatus = false;
      state.errorMessage = payload.message;
    },
    [getPractitionerDetails.pending]: (state) => {
      state.practitionerDetailsStatus = false;
    },
  },
});

export default practitionerSlice.reducer;
