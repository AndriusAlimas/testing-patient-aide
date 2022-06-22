import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get list of procedures
export const getProcedures = createAsyncThunk(
  "procedures/getProcedures",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "getProcedures";
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
export const getProcedureDetail = createAsyncThunk(
  "procedures/getProcedureDetail",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "getProcedureDetail";
    const patientId = `70505`;
    const procedureId = "700000000028";
    const token = state.user.token;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${patientId}/${procedureId}`,
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

export const proceduresSlice = createSlice({
  name: "procedures",
  initialState: {
    procedures: { proceduresList: [], proceduresStatus: false },
    procedureDetails: {
      procedureDetails: "n/a",
      procedureDetailsStatus: false,
    },
  },
  extraReducers: {
    [getProcedures.fulfilled]: (state, { payload }) => {
      state.procedures.proceduresStatus = true;
      state.procedures.proceduresList = payload;
      return state;
    },
    [getProcedures.rejected]: (state, { payload }) => {
      state.procedures.proceduresStatus = false;
      state.errorMessage = payload.message;
    },
    [getProcedures.pending]: (state) => {
      state.procedures.proceduresStatus = false;
    },
    [getProcedureDetail.fulfilled]: (state, { payload }) => {
      state.procedureDetails.procedureDetailsStatus = true;
      state.procedureDetails.procedureDetails = payload;
      return state;
    },
    [getProcedureDetail.rejected]: (state, { payload }) => {
      state.procedureDetails.procedureDetailsStatus = false;
      state.errorMessage = payload.message;
    },
    [getProcedureDetail.pending]: (state) => {
      state.procedureDetails.procedureDetailsStatus = false;
    },
  },
});

export default proceduresSlice.reducer;
