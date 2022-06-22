import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEncounters = createAsyncThunk(
  "encounters/getAllEncounters",
  async (arg, { getState }) => {
    try {
      const state = getState();
      const envURL = `https://oneedfhirtest.azurewebsites.net`;
      const apiService = `GetAllEncounters`;
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

export const userSlice = createSlice({
  name: "encounters",
  initialState: {
    allEncounters: [],
    allEncountersStatus: false,
    isFetching: false,
  },

  extraReducers: {
    [getAllEncounters.fulfilled]: (state, { payload }) => {
      state.allEncounters = payload;
      state.allEncountersStatus = true;
      state.isFetching = false;
    },
    [getAllEncounters.rejected]: (state, { payload }) => {
      state.allEncountersStatus = false;
      state.isFetching = false;
    },
    [getAllEncounters.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { handleSignInResponse, updateIsAuthenticated, clearState } =
  userSlice.actions;
export default userSlice.reducer;
