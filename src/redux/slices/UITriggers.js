import { createSlice } from "@reduxjs/toolkit";

export const UITriggers = createSlice({
  name: "uiTriggers",
  initialState: {
    scrollYStatus: "top",

    pageTransitionsStyle: {
      initial: { scale: (0, 0.8), opacity: 0 },
      animate: { scale: (0, 1), opacity: 1 },
      end: { scale: (0, 0.8), opacity: 0 },
      transition: { duration: 0.1 },
    },

    profileStatus: false,
    notificationsStatus: false,
  },

  reducers: {
    setScrollYStatus: (state, action) => {
      state.scrollYStatus = action.payload;
    },
    toggleProfileStatus: (state, action) => {
      state.profileStatus = action.payload;
    },
    toggleNotificationsStatus: (state, action) => {
      state.notificationsStatus = action.payload;
    },
  },
});

export const {
  setScrollYStatus,
  toggleProfileStatus,
  toggleNotificationsStatus,
} = UITriggers.actions;
export default UITriggers.reducer;
