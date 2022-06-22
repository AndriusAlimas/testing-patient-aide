import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get list of conditions
export const getConditions = createAsyncThunk(
  "conditions/getConditions",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetCondition";
    const patientId = state.user.userDetails.id;
    const token = state.user.token;

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

// Get procedure Details
export const getConditionDetail = createAsyncThunk(
  "conditions/GetConditionDetail",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetConditionDetail";
    const patientId = `70614`;
    const conditionsId = "700000000150";
    const token = state.user.token;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${patientId}/${conditionsId}`,
        headers: {
          accept: "application/json",
          "Authorization-token": token,
        },
      };
      const response = await axios(config);
      const data = await response.data;
      console.log(data, "details");

      return data;
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const conditionsSlice = createSlice({
  name: "conditions",
  initialState: {
    conditions: { proceduresList: [], conditionsStatus: false },
    conditionDetails: {
      conditionDetails: "n/a",
      conditionDetailsStatus: false,
      practitionerName: "",
      practitionerNameStatus: false,
    },
  },
  extraReducers: {
    [getConditions.fulfilled]: (state, { payload }) => {
      state.conditions.conditionsStatus = true;
      state.conditions.proceduresList = payload;
      return state;
    },
    [getConditions.rejected]: (state, { payload }) => {
      state.conditions.conditionsStatus = false;
      state.errorMessage = payload.message;
    },
    [getConditions.pending]: (state) => {
      state.conditions.conditionsStatus = false;
    },
    [getConditionDetail.fulfilled]: (state, { payload }) => {
      state.conditionDetails.conditionDetailsStatus = true;
      state.conditionDetails.conditionDetails = payload;
      console.log(payload, "fulfilled details ");
      return state;
    },
    [getConditionDetail.rejected]: (state, { payload }) => {
      state.conditionDetails.conditionDetailsStatus = false;
      state.errorMessage = payload.message;
    },
    [getConditionDetail.pending]: (state) => {
      state.conditionDetails.conditionDetailsStatus = false;
    },
  },
});

export default conditionsSlice.reducer;
