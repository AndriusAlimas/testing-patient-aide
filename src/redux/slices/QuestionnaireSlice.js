// https://oneedfhirtest.azurewebsites.net/GetQuestionnaireResponse/70771

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// create function
export const getQuestionnaires = createAsyncThunk(
  "questionnaires/getQuestionnaires",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetQuestionnaireResponse";
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

export const questionnairesSlice = createSlice({
  name: "questionnaires",
  initialState: {
    questionnairesList: [],
    questionnairesListStatus: false,
    sortDateStatus: "dateAscending",
    completionStatus: "in-progress",
  },
  reducers: {
    updateQuestionnaireSort: (state, action) => {
      state.sortDateStatus = action.payload;
    },
    updateCompletionStatus: (state, action) => {
      state.completionStatus = action.payload;
    },
  },
  extraReducers: {
    [getQuestionnaires.fulfilled]: (state, { payload }) => {
      state.questionnairesListStatus = true;
      state.questionnairesList = payload;
      return state;
    },
    [getQuestionnaires.rejected]: (state, { payload }) => {
      state.questionnairesListStatus = false;
      state.errorMessage = payload.message;
    },
    [getQuestionnaires.pending]: (state) => {
      state.questionnairesListStatus = false;
    },
  },
});

export const { updateQuestionnaireSort, updateCompletionStatus } =
  questionnairesSlice.actions;
export default questionnairesSlice.reducer;
