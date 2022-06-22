import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get list of documents
export const getAllDocuments = createAsyncThunk(
  "documents/getAllDocuments",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetAllDocuments";
    const patientId = state.user.userDetails.id;
    const type = "documents";
    const token = state.user.token;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${patientId}/${type}`,
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
export const getBinaryObject = createAsyncThunk(
  "documents/getBinaryObject",
  async (arg, { getState }) => {
    const state = getState();
    const envURL = "https://oneedfhirtest.azurewebsites.net";
    const apiService = "GetBinaryObject";
    const type = "documents";
    const patientId = `70478`;
    const documentID = "700000000104";
    const token = state.user.token;

    try {
      const config = {
        method: "GET",
        url: `${envURL}/${apiService}/${type}~${patientId}~${documentID}`,
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

export const documentsSlice = createSlice({
  name: "documents",
  initialState: {
    documentsList: { documents: [], documentsStatus: false },
    document: {
      documentDetails: "n/a",
      documentDetailsStatus: false,
    },
  },
  extraReducers: {
    [getAllDocuments.fulfilled]: (state, { payload }) => {
      state.documentsList.documentsStatus = true;
      state.documentsList.documents = payload;
      return state;
    },
    [getAllDocuments.rejected]: (state, { payload }) => {
      state.documentsList.documentsStatus = false;
      state.errorMessage = payload.message;
    },
    [getAllDocuments.pending]: (state) => {
      state.documentsList.documentsStatus = false;
    },
    [getBinaryObject.fulfilled]: (state, { payload }) => {
      state.document.documentDetailsStatus = true;
      state.document.documentDetails = payload;
      return state;
    },
    [getBinaryObject.rejected]: (state, { payload }) => {
      state.document.documentDetailsStatus = false;
      state.errorMessage = payload.message;
    },
    [getBinaryObject.pending]: (state) => {
      state.document.documentDetailsStatus = false;
    },
  },
});

export default documentsSlice.reducer;
