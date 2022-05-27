import { createSlice } from "@reduxjs/toolkit";

const popUpStatusSlice = createSlice({
  name: "popUpStatus",
  initialState: {
    profileStatus: false,
    notificationsStatus: false,
  },
  reducers: {
    toggleProfileStatus: (state, action) => {
      state.profileStatus = action.payload;
    },
    toggleNotificationsStatus: (state, action) => {
      state.notificationsStatus = action.payload;
    },
  },
});

export const { toggleProfileStatus, toggleNotificationsStatus } =
  popUpStatusSlice.actions;

export default popUpStatusSlice.reducer;
