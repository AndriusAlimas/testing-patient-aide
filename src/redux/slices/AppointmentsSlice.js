import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllAppointments = createAsyncThunk(
  "appointments",
  async (arg, { getState }) => {
    try {
      const state = getState();
      const envURL = `https://oneedfhirtest.azurewebsites.net`;
      const apiService = `GetAllAppointments`;
      let patientId = state.user.userDetails.id;
      const token = state.user.token;

      const config = {
        method: "get",
        url: `${envURL}/${apiService}/${patientId}/outpatient`,
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
  name: "appointments",
  initialState: {
    allAppointments: [],
    allAppointmentsStatus: false,
    isFetching: false,
  },

  extraReducers: {
    [getAllAppointments.fulfilled]: (state, { payload }) => {
      state.allAppointments = payload;
      state.allAppointmentsStatus = true;
      state.isFetching = false;
    },
    [getAllAppointments.rejected]: (state, { payload }) => {
      state.allAppointmentsStatus = false;
      state.isFetching = false;
    },
    [getAllAppointments.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { handleSignInResponse, updateIsAuthenticated, clearState } =
  userSlice.actions;
export default userSlice.reducer;
