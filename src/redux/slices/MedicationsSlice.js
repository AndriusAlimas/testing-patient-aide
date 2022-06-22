import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedications = createAsyncThunk(
  "medications/getMedications",
  async (arg, { getState }) => {
    try {
      const state = getState();
      const envURL = `https://oneedfhirtest.azurewebsites.net`;
      const apiService = `GetMedications`;
      let patientId = state.user.userDetails.id;
      const token = state.user.token;

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

export const medicationsSlice = createSlice({
  name: "medications",
  initialState: {
    medications: [],
    medicationsStatus: false,
    isFetching: false,
  },

  extraReducers: {
    [getMedications.fulfilled]: (state, { payload }) => {
      state.medications = payload;
      state.medicationsStatus = true;
      state.isFetching = false;
    },
    [getMedications.rejected]: (state, { payload }) => {
      state.medicationsStatus = false;
      state.isFetching = false;
    },
    [getMedications.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export default medicationsSlice.reducer;
