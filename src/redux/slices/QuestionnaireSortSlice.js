import { createSlice } from "@reduxjs/toolkit";

export const questionnaireSortSlice = createSlice({
  name: "questionnaireSort",
  initialState: {
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
});

export const { updateQuestionnaireSort, updateCompletionStatus } =
  questionnaireSortSlice.actions;
export default questionnaireSortSlice.reducer;
